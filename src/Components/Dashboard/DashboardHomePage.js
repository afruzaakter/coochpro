
import React from 'react';

const DashboardHomePage = () => {
    return (
       <div class="flex">
         <div class="card card-compact text-white  w-96 bg-red-300 shadow-xl m-10 h-36 ">
            <div class="card-body">
                <h2 class="text-2xl  text-center">Pending Task</h2>
               
            </div>
        </div>
         <div class="card card-compact w-96 bg-gray-400 shadow-xl m-10 h-36 ">
            <div class="card-body">
                <h2 class="text-2xl text-white text-center">To Do Task</h2>
               
            </div>
        </div>
         <div class="card card-compact w-96 bg-gray-600 shadow-xl m-10 h-36 ">
            <div class="card-body">
                <h2 class="text-2xl text-white text-center">Tomorrow Task</h2>
               
            </div>
        </div>
       </div>
    );
};

export default DashboardHomePage;

