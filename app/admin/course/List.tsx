import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache"

interface ICourse {
  id: number,
  name: string
  email: string
}

export default async function Listcourse() {
  const courses = await list()
  async function list() {
    revalidatePath("/admin/course")
    const response = await fetch("https://server20241-beige.vercel.app/courses")
    return response.json();

  }

  async function deleteCourse(formData: FormData){
    "use server"
    const id = formData.get("id") as string;
    const response = await fetch("https://server20241-beige.vercel.app/courses/"+id, {method: "DELETE" });
    revalidatePath("/admin/course")
  }

  return (
    <Table>
      <TableCaption>Lista de cursos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Ação</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((item: ICourse) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>

            <TableCell>
              <form>
                <input type="text" name="id" hidden value={item.id} />
                <Button formAction={deleteCourse} variant="destructive">Excluir</Button>
              </form>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table >
  )
}
