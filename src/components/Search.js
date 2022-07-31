import React from 'react';
import swAlert from '@sweetalert/with-react';

const Search = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		const search = e.currentTarget.keyword.value.trim();
		if (search.length === 0) {
			swAlert(<h2>Please enter a search term</h2>);
			return;
		}
    else if (search.length < 4) {
      swAlert(<h2>Please enter a search term of at least 4 characters</h2>);
      return;
    }
	};
	return (
		<form className="d-flex align-items-center" onSubmit={submitHandler}>
			<label className="from-label mb-0 mx-2">
				<input
					type="text"
					name="keyword"
					className="form-control"
					placeholder="Search"
				></input>
			</label>
			<button type="submit" className="btn btn-success ml-2">
				Search
			</button>
		</form>
	);
};

export default Search;
