import { Button } from "@/components/ui/button";
import ListStudent from "./List";
import NewStudent from "./New";

export default function Student(){
    return(
        <div className="w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-6">
              <a href="/admin/student/new">
                <Button> Cadastrar Estudantes</Button>
              </a>
              
      </div>
      <ListStudent/>
        </div>

    )
}