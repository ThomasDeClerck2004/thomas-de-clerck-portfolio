export default function Hobby({ hobbyName }) {
    return (
        <div className="w-full max-w-[280px] 2xl:max-w-[300px] pl-[3px] rounded-lg bg-gradient-to-b from-[#005635] to-[#00ff99] hover:-translate-y-2 transition duration-300 ease-in-out shadow-md shadow-primary">
            <div className="text-gray-100 bg-[#1a1a1a] cursor-default font-semibold px-6 py-4 rounded-lg flex items-center justify-center h-[120px] 2xl:h-[150px]">
                <span className="font-semibold text-xl 2xl:text-2xl">{hobbyName}</span>
            </div>
        </div>
    );
}
