import { useState, useEffect } from "react";
// API
import apiSettings, { Movie } from '../API';
// helpers
import { isPersitedState } from "../helpers";

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading ] = useState(false); 
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page: number, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await apiSettings.fetchMovies(searchTerm, page);
            setLoading(false);
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results] 
            }));
        } catch(error) {
            setError(true);
            setLoading(false);
        }
    };
    // Initail and search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersitedState('homeState');

            if (sessionState) {
                console.log('Grabbing from sessionStorage');
                setState(sessionState);
                return;
            }
        }
        console.log('Grabbing from the API');
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // load more
    useEffect(() => {
        if (!isLoadingMore) {
           return;
        } else {
            fetchMovies(state.page + 1, searchTerm);
            setIsLoadingMore(false);
        }
    }, [isLoadingMore, searchTerm, state.page]);

    //Write to sessionStorage
    useEffect(() => {
        if(!searchTerm) 
            sessionStorage.setItem('homeState', JSON.stringify(state));
    }, [searchTerm, state]);

    return {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};