import { useDispatch, useSelector } from 'react-redux'
import s from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';


const SearchBox = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);

    const handleSearch = e => {
        dispatch(changeFilter(e.target.value));
    };


    return (
        <div className={s.box}>
            <p>Find contacts by name</p>
            <input className={s.input}
                type="text"
                value={filter}
                onChange={handleSearch}
            />
        </div>
    )

}

export default SearchBox


