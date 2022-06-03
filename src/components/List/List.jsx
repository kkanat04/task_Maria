import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import Search from '../Search/Search';
import { saveList, setLoading } from '../../modules/redux/action/starWarsAction';
import { Get } from '../../config/query';
import './List.css';
import Films from '../Category/Films';
import Cards from '../Cards/Cards';

function List() {
  const data = useSelector((state) => state.starWarsReducers.data);
  const loading = useSelector((state) => state.starWarsReducers.loading);
  const dispatch = useDispatch();
  const { label, params } = useParams();
  const list = true;

  useEffect(() => {
    Get(label, ((res) => {
      dispatch(setLoading(false));
      dispatch(saveList(res));
    }), params);
  }, [label, params, loading]);
  const location = window.location.pathname;
  return (
    <div>
      <div className="list__search__logo">
        <Link style={{width: '10%', marginLeft: 20}} to="/">
          <img
          className="list__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png?20100627124842"
          alt="loading..."
        />
        </Link>
        <Search label={label} params={params} list={list} />
      </div>

      <div className="list__card">
      {location !== '/' && data.results && !loading ? <Cards /> : null}
      </div>

      {loading ? <div className="loading-container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div> : null}

      {data.count === 0 ? <div id="main">
        <div id="txt">
          <h1 className="animation__h1">NOT FOUND</h1>
        </div>
      </div>
          : null}
    </div>
  );
}

export default List;
