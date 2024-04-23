import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-gray-900 text-white'>
				<CiSearch className='w-6 h-6 outline-none' />
                
			</button>
		</form>
	);
};
export default SearchBar;