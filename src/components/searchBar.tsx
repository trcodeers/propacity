
type Props ={
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBar = (props: Props) =>{

    const { onInputChange } = props

    return(
        <input
          onChange={onInputChange}
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          placeholder="Search..."
        />
    )

}

export default SearchBar;