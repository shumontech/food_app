import React from 'react';
import FeedbackCard from '../../src/components/card/FeedbackCards';
import Link from 'next/link';

export const metadata = {
    title: "Feedback"
}

const getFeedback = async () => {
    const res = await fetch("http://localhost:3000/api/feedback")
    const data = await res.json()
    return data
}
const FeedbackPage = async () => {

    const feedback = await getFeedback()
    console.log(feedback);
    return (
        <div>
            <div className="">
                <h1 className="text-3xl font-bold mb-4">{feedback.length}Feedback Page</h1>

                <Link href="/feedback/add" className="btn bg gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded mb-5 inline-block    ">
                    Add Feedback
                </Link>

                <div className="my-3 space-y-5">
                    {
                        feedback.map(fd => <FeedbackCard key={fd._id}></FeedbackCard>)

                    }
                </div>

            </div>
        </div>
    );
};

export default FeedbackPage;