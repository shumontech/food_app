import { ObjectId } from "mongodb"
import { connect } from "../../../lib/dbconnect"

const feedBackCollection = connect("feedBack_DB")

export async function GET(request: Request,{ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params

  const query = ({ _id: new ObjectId(id) })
  const result = await feedBackCollection.findOne(query)
 
  return Response.json(result)
}

export async function DELETE(request: Request,{ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params
  const {massage} = await request.json(); 

  const query = ({ _id: new ObjectId(id) })
  const result = await feedBackCollection.deleteOne(query)
 
  return Response.json(result)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { message } = body;

    // ID validation
    if (!ObjectId.isValid(id)) {
      return Response.json(
        { success: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    // Message validation
    if (!message || typeof message !== "string") {
      return Response.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }

    const query = { _id: new ObjectId(id) };

    const updateDoc = {
      $set: { message },
    };

    const result = await feedBackCollection.updateOne(query, updateDoc);

    if (result.matchedCount === 0) {
      return Response.json(
        { success: false, message: "Feedback not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, message: "Updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}