import React, {useState} from "react";
import MatchHeroDetail from "./MatchHeroDetail";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import ErrorComponent from '../LoginSection/ErrorComponent';
import "./Search.css";

const Search = () => {

    const [matchSearch, setMatchSearch] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);

    const initialValues = {
        search:''
    }

    const onChange = (e) => {
        if (e.target.value.length > 2) {
            axios.get(`https://www.superheroapi.com/api.php/930968727822510/search/${e.target.value}`)
            .then( response => {
                setMatchSearch(true);
                setDataSearch(response.data.results);
            })
            .catch( error => {
                alert('Super Héroe no encontrado.');
            })
        } else {
            setMatchSearch(false);
            setDataSearch([]);
        }       
    }
    
    const validate = values => {
        let errors = {};
        if (!values.search) {
            errors.search = 'Empty input';
        } else if (values.length < 3) {
            errors.search = 'Need at least 3 characters to search';
        }
        return errors;
    }

    return(
        <main className="col-sm-12 col-md-8 col-lg-9 main-search">
            <div className="container container-search">
                <div className="row row-search-form">
                    <div className="col-12 div-form mb-5">
                        <Formik
                            initialValues = {initialValues}
                            validate = {validate}
                        >
                            <Form className="p-4 search-form">
                                <div className="mb-4">
                                    <label htmlFor="search" className="form-label">Nombre Héroe</label>
                                    <input 
                                        type="text" 
                                        name="search"
                                        className="form-control" 
                                        id="search"
                                        onChange={onChange}
                                    />
                                    <ErrorMessage name="search" component={ErrorComponent} />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

                {
                    matchSearch && <MatchHeroDetail data={dataSearch} />
                }
                
            </div>
        </main>
    )
}

export default Search;