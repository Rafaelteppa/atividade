import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookAIcon,Home, PersonStanding } from "lucide-react";
export default function Aside({className}:any) {
    return(
        <div className={cn("hidden md:block size-2/6 ",className)}>
         <div className="flex flex-col ">

            <h2 className="font-bold">Dasboard</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <Home className="mr-2"/>
                        Home

                        </Button>
                        </a>
                        <a href="/admin/student">
                            <Button variant="ghost">
                                <PersonStanding className="mr-2"/>
                                Estudantes
                            </Button>
                            </a>


                            <a href="/admin/course">
                            <Button variant="ghost">
                                <PersonStanding className="mr-2"/>
                                Curso
                            </Button>

                            </a>

                            <h2 className="font-bold">Configurações</h2>

                        <a href="/admin/student">
                            <Button variant="ghost">
                                <PersonStanding className="mr-2"/>
                                Conta
                            </Button>
                            </a>
                            


                            </div>
        
            
           


        

        </div>
    )
    
    }