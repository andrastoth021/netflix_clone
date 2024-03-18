
const Loading = () => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
            <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-purple-500 rounded-full"></div>
        </div>
    );
}

export default Loading;
