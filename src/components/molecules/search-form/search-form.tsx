import './search-form.scss';

import { SearchIcon } from '../../../assets';

export const SearchForm = () => {
  return (
    <form className="search-form w-100 d-flex">
      <input
        className="form-control form-control-dark text-bg-dark"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Поиск..."
      />
      <button className="search-form__btn btn btn-light" type="submit" id="button-addon2">
        <SearchIcon />
      </button>
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </form>
  );
};
