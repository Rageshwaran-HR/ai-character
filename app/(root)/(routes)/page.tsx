import { Categories } from "@/components/catagories";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { Companions } from "../components/companions";

interface RootPageprops{
    searchParams:{
        categoryId:string;
        name:string;
    }
}

const RootPage=async ({searchParams}:RootPageprops)=>{
    const data = await prismadb.companion.findMany({
        where:{
            categoryId:searchParams.categoryId,
            name:{
                search:searchParams.name
              }
        },
        orderBy:{
            createdAt:"desc",
        },
        include:{
            _count:{
                select:{
                    messages:true
                }
            }
        }
    })
    const catagories =await prismadb.category.findMany()

    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput/>
            <Categories data={catagories} />
            <Companions data={data}/>
        </div>
    );
}

export default RootPage;