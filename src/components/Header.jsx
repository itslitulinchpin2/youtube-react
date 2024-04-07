import React, {  useState } from 'react';
import { BsYoutube } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const inputHandler = (e) => {
        setSearch(e.target.value); // 입력값으로부터 search 상태 업데이트
    };

    const navigatePage = (e) => {
        e.preventDefault();
        navigate(`/videos/${search}`);
        setSearch('')

    };

    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to="/" className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form className = 'w-fill flex justify-center' onSubmit={navigatePage} >
                <input className='w-7/12 p-2 outline-none bg-black text-gray-50' placeholder="Search..." onChange={inputHandler} type="text" value={search} />
                <button className='bg-zinc-600 px-4' type="submit">
                    <FaSearch />
                </button>
            </form>
        </header>
    );
}
