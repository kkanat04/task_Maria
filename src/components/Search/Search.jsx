import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveList, setLoading } from '../../modules/redux/action/starWarsAction';
import './Search.css';

// eslint-disable-next-line react/prop-types
function Search({ label, params, list }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(params || '');
  const [select, setSelect] = useState(label || 'films');

  const category = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

  const search = (e) => {
    dispatch(saveList([]));
    dispatch(setLoading(true));
    e.preventDefault();
    navigate(`/results/${select}/search=${value}`);
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
    if (list) {
      dispatch(saveList([]));
      dispatch(setLoading(true));
      navigate(`/results/${e.target.value}/search=${value}`);
    }
  };
  return (
    <div className="search">
      <form className={list ? 'search__form__list' : 'search__form'} onSubmit={(e) => search(e)}>
        <input placeholder="Search..." className="search__input" value={value} onChange={(e) => setValue(e.target.value)} />
        <input type="submit" disabled={!value} value="Search" className="search__btn" />
      </form>

      <div className="search__list">
        {category.map((el) => (
          <input
            className={select === el ? 'search__list__btn__active' : 'search__list__btn'}
            type="submit"
            key={el}
            onClick={(e) => handleChange(e)}
            value={el}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
