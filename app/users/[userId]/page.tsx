interface UserIdPageProps {
    params: {
        userId: string;
    };
};

const Page = ({
    params,
}: UserIdPageProps) => {
    return(
        <div>
            USER ID: {params.userId}
        </div>
    );
};

export default Page;