import React from "react";

const Search = () => {
    return (
        <div className="page_wrapper">
        <section className="internal-page-wrapper">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12 mt-5">
                            <hr />
                            <h1 className="font-weight-bold">Search Page</h1>
                            <span className="pages">Coming Soon!</span>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <div div className="input-group" >

                <input type="text" className="form-control" placeholder="Search apple.com" aria-label="Username" aria-describedby="basic-addon" />
                <div className="input-group-append">
                <span className="input-group-text" id="basic-addon">
                    <i className="fa fa-search"></i>
                </span>
                </div>
            </div>
        </div>
    );
}

export default Search;
