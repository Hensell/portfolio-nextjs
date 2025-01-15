import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function App() {
  return (
    <Card style={{ backgroundImage: "url('/image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="backdrop-blur-[11px] backdrop-saturate-[111%] bg-[#ffffff] bg-opacity-10 rounded-2xl">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
