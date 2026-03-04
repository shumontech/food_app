export const feedBack = [
    {
        id: 1,
        massage:"Food was great and tasty. Will order again!"
    
    },
    {
        id: 2,
        massage:"Waiter should be more polite. Food was good but service quite bad."
    
    }
]


export async function GET() {
  return Response.json({
    status: 200,
    message: "Hello from API route!"
  });
}