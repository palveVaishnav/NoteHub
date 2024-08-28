
export default function Reviews() {
    return (
        <div>
            <div className="p-4 grid w-full place-content-center gap-4">
                <div
                    className="text-3xl fontRobota font-semibold grid w-full place-content-center"
                >{'Testimonials'}</div>
                <div
                    className="text-gray-800 grid w-full place-content-center"
                >
                    {'Here directly from our users '}
                </div>
                <div className="p-8 md:p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="border border-slate-200 w-full p-4 rounded-md hover:shadow-lg h-fit bg-gradient-to-br from-slate-300 to-slate-100">
                                <div
                                    className="text-md font-bold"
                                >{review.title}</div>
                                <div className="font-light p-2 px-4">
                                    {"'"}{review.review}{"'"}
                                </div>
                                <div className="flex p-8 gap-2 items-center">
                                    <div className="h-10">
                                        <img src={review.avatar} className="h-full w-full" />
                                    </div>
                                    <div>
                                        <div className="font-bold" >{review.userName}</div>
                                        <div>{review.profession}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const reviews = [
    {
        userName: 'Rohan Jadhav',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Great Learning Resource',
        review: 'The notes are incredibly detailed and well-organized. They have been a lifesaver for my exam preparation. Highly recommend to all students!'
    },
    {
        userName: 'Aarti Sharma',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Helpful and Informative',
        review: 'These notes cover all the key topics in a clear and concise manner. They have really helped me understand difficult concepts.'
    },
    {
        userName: 'Suresh Patel',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Excellent Quality',
        review: 'I was impressed with the quality of the notes. They are well-written and easy to follow, making studying much more efficient.'
    },
    {
        userName: 'Neha Singh',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Highly Useful',
        review: 'These notes are a fantastic resource for revision. They are comprehensive and cover all the necessary topics thoroughly.'
    },
    {
        userName: 'Arjun Rao',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Top-Notch Notes',
        review: 'The notes provided are of top-notch quality. They are very helpful for understanding complex subjects and are well-structured.'
    },
    {
        userName: 'Priya Menon',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Fantastic Study Aid',
        review: 'I found these notes to be an excellent study aid. They are detailed and make it easier to grasp difficult concepts.'
    },
    {
        userName: 'Vikram Kumar',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Very Comprehensive',
        review: 'These notes cover everything you need to know. They are comprehensive and well-organized, making them a great resource for studying.'
    },
    {
        userName: 'Meera Joshi',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Great Resource for Exams',
        review: 'The notes have been extremely helpful for my exam preparations. They are well-written and cover all the important topics.'
    },
    {
        userName: 'Amitabh Verma',
        profession: 'Student',
        avatar: 'https://avatar.iran.liara.run/public',
        title: 'Very Helpful Notes',
        review: 'I’ve found these notes to be very helpful. They break down complex information into understandable chunks.'
    },

];

