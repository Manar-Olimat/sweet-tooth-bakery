import {useContext,useState,useEffect} from "react";
import UserAuthContext from '../store/userAuthContext';
import axios from "axios";
import RecipeList from './recipes/RecipeList';
import UserData from "./UserData";
import { Link, useParams } from 'react-router-dom';

const Tabs = () => {
    const authContext=useContext(UserAuthContext);
    const params = useParams();

    const [openTab, setOpenTab] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedRecipes, setLoadedRecipes] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        //  get data from firebase api
        axios.get(
            'https://sweettoothbakery-8fd88-default-rtdb.firebaseio.com/favRecipes.json')
            .then(response => {
                //response.json() returns a promise as well 
                // so we have to work with another then to get data 
                return response.data;

            }).then(data => {
                const recipes = [];
                for (const key in data) {
                    console.log(data[key].userId);
                    if(data[key].userId ==params.id){
                     const recipe = {
                        id: key,
                        ...data[key]
                    };
                    recipes.push(recipe);}
                }

                // so it wont display the recipe before data get fetched
                setIsLoading(false);
                setLoadedRecipes(recipes);
            });

    },
        // if we did not put this array , useEffect Function will 
        // excute whenever the component excutes

        // [] => it will excute when the component exute for the first time
        // [value] => it will excute when the value changes


        []);






    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-tabs"
                                        : "text-black-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Profile
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-tabs"
                                        : "text-black-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Favorites
                            </a>
                        </li>

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <UserData/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    {isLoading? 
                                    <section>

                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>

                                    </section>
:

<section>
<RecipeList recipe={loadedRecipes}/>

</section>
}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs />
        </>
    );
}