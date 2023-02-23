import React, { useEffect, useState } from 'react';
import './DashboardLeft.css';
import cart from '../../assets/current Balance.png';
import useDate from '../../hook/useDate';

const DashboardLeft = () => {
    const today = new Date()
    const yesterday = new Date(Date.now() - 86400000);
    const [allExpenses] = useDate()
    const [todayFullDate, setTodayFullDate] = useState('')
    const [yesterdayFullDate, setYesterdayFullDate] = useState('')
    const todayExpenses = allExpenses.filter((ex, i) => (ex?.date?.includes(todayFullDate)))
    const yesterdayExpenses = allExpenses.filter((ex, i) => (ex?.date?.includes(yesterdayFullDate)))
    useEffect(() => {
        if (today) {
            setTodayFullDate(`${('' + today)?.split(' ')[0]} ${('' + today)?.split(' ')[1]} ${('' + today)?.split(' ')[2]} ${('' + today)?.split(' ')[3]}`)
            setYesterdayFullDate(`${('' + yesterday)?.split(' ')[0]} ${('' + yesterday)?.split(' ')[1]} ${('' + yesterday)?.split(' ')[2]} ${('' + yesterday)?.split(' ')[3]}`)
        }
    }, [today, yesterday])
    return (
        <div className='Dashboard-left'>
            <div>
                <h1>Kösten</h1>
                <p>Expense Manager</p>
            </div>
            <div className='current-blanace-cart' style={{ backgroundImage: "url(" + cart + ")", backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <p>CURRENT BALANCE</p>
                <div>
                    <svg width="80" height="73" viewBox="0 0 80 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.9043 46.6726H61.7098C55.813 46.6726 51.0312 41.8909 51.0312 35.9901C51.0312 30.0933 55.813 25.3115 61.7098 25.3115H77.7773" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M63.5329 35.7458H62.2948" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.3838 19.4568H38.3005" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 36.5794C1 9.89286 10.6865 1 39.754 1C68.8175 1 78.504 9.89286 78.504 36.5794C78.504 63.2619 68.8175 72.1587 39.754 72.1587C10.6865 72.1587 1 63.2619 1 36.5794Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div>
                        <h1>%55,569</h1>
                        <p>Total Expense</p>
                    </div>
                </div>
            </div>
            <div className='activity'>
                <p>LATEST ACTIVITY</p>
                <hr />
                <p className='title'>Today</p>
                <div className='today-expenses'>
                    {todayExpenses.length > 0 && todayExpenses.map(ex =>
                        <>
                            {(ex.expenses?.games?.name && ex.expenses?.games?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.25516 12.0625V15.6377" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0794 13.8494H7.43164" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4776 12.1707H15.3755" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.2081 15.5828H17.1059" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.51416 2.21582C8.52084 2.92991 9.10605 3.5027 9.82013 3.49602H10.8283C11.9309 3.48743 12.833 4.37144 12.8483 5.47407V6.48124" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8124 13.8953C21.8124 8.33539 19.4257 6.48145 12.2648 6.48145C5.10296 6.48145 2.71631 8.33539 2.71631 13.8953C2.71631 19.4562 5.10296 21.3092 12.2648 21.3092C19.4257 21.3092 21.8124 19.4562 21.8124 13.8953Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.games.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.games.value}</h1>
                                </div>}
                            {(ex.expenses?.antivirus?.name && ex.expenses?.antivirus?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.antivirus.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.antivirus.value}</h1>
                                </div>}
                            {(ex.expenses?.ipCams?.name && ex.expenses?.ipCams?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <h3>{ex.expenses.ipCams.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.ipCams.value}</h1>
                                </div>}
                            {(ex.expenses?.home?.name && ex.expenses?.home?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07861 16.1357H14.8936" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.home.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.home.value}</h1>
                                </div>}
                            {(ex.expenses?.gas?.name && ex.expenses?.gas?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1665)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81888 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1665">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3>{ex.expenses.gas.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.gas.value}</h1>
                                </div>}
                            {(ex.expenses?.security?.name && ex.expenses?.security?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.security.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.security.value}</h1>
                                </div>}
                            {(ex.expenses?.videos?.name && ex.expenses?.videos?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.1514 9.67253C17.9895 8.21539 20.4561 6.80587 20.9228 7.31063C21.6942 8.1392 21.6276 16.0249 20.9228 16.7773C20.4942 17.244 18.0085 15.8344 16.1514 14.3868" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51416 12.0371C2.51416 6.84473 4.23892 5.11426 9.41511 5.11426C14.5904 5.11426 16.3151 6.84473 16.3151 12.0371C16.3151 17.2285 14.5904 18.96 9.41511 18.96C4.23892 18.96 2.51416 17.2285 2.51416 12.0371Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.videos.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.videos.value}</h1>
                                </div>}
                            {(ex.expenses?.papers?.name && ex.expenses?.papers?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5955 15.6963H8.37549" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.5955 11.9365H8.37549" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.131 8.17676H8.37598" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60986 12C3.60986 18.937 5.70786 21.25 12.0009 21.25C18.2949 21.25 20.3919 18.937 20.3919 12C20.3919 5.063 18.2949 2.75 12.0009 2.75C5.70786 2.75 3.60986 5.063 3.60986 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.papers.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.papers.value}</h1>
                                </div>}
                            {(ex.expenses?.shops?.name && ex.expenses?.shops?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.52377 7C9.41427 5.74386 13.9724 5.45573 16 5.5C18.0276 5.54427 18.8831 6.2663 19.5 7.5C20.5 9.5 20.289 14.4881 18.5 16.0871C16.712 17.6861 9.33015 17.8381 6.87015 16.0871C4.27115 14.2361 5.629 9.192 5.544 5.743C5.595 3.813 3.5 3.5 3.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13 10.5H15.773" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26375 20.127C7.56375 20.127 7.80775 20.371 7.80775 20.671C7.80775 20.972 7.56375 21.216 7.26375 21.216C6.96275 21.216 6.71875 20.972 6.71875 20.671C6.71875 20.371 6.96275 20.127 7.26375 20.127Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5953 20.127C17.8963 20.127 18.1403 20.371 18.1403 20.671C18.1403 20.972 17.8963 21.216 17.5953 21.216C17.2953 21.216 17.0513 20.972 17.0513 20.671C17.0513 20.371 17.2953 20.127 17.5953 20.127Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.shops.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.shops.value}</h1>
                                </div>}
                            {(ex.expenses?.travel?.name && ex.expenses?.travel?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1715)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81887 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1715">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <h3>{ex.expenses.travel.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.travel.value}</h1>
                                </div>}
                            {(ex.expenses?.service?.name && ex.expenses?.service?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1715)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81887 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1715">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3>{ex.expenses.service.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.service.value}</h1>
                                </div>}
                        </>
                    )}
                </div>
                <p className='title'>Yesterday</p>
                <div className='today-expenses'>
                    {todayExpenses.length > 0 && todayExpenses.map(ex =>
                        <>
                            {(ex.expenses?.games?.name && ex.expenses?.games?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.25516 12.0625V15.6377" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.0794 13.8494H7.43164" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.4776 12.1707H15.3755" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.2081 15.5828H17.1059" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.51416 2.21582C8.52084 2.92991 9.10605 3.5027 9.82013 3.49602H10.8283C11.9309 3.48743 12.833 4.37144 12.8483 5.47407V6.48124" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8124 13.8953C21.8124 8.33539 19.4257 6.48145 12.2648 6.48145C5.10296 6.48145 2.71631 8.33539 2.71631 13.8953C2.71631 19.4562 5.10296 21.3092 12.2648 21.3092C19.4257 21.3092 21.8124 19.4562 21.8124 13.8953Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.games.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.games.value}</h1>
                                </div>}
                            {(ex.expenses?.antivirus?.name && ex.expenses?.antivirus?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.antivirus.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.antivirus.value}</h1>
                                </div>}
                            {(ex.expenses?.ipCams?.name && ex.expenses?.ipCams?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <h3>{ex.expenses.ipCams.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.ipCams.value}</h1>
                                </div>}
                            {(ex.expenses?.home?.name && ex.expenses?.home?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.07861 16.1357H14.8936" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.home.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.home.value}</h1>
                                </div>}
                            {(ex.expenses?.gas?.name && ex.expenses?.gas?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1665)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81888 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1665">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3>{ex.expenses.gas.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.gas.value}</h1>
                                </div>}
                            {(ex.expenses?.security?.name && ex.expenses?.security?.value) &&
                                <div>
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5917 13.0009C11.5917 14.0997 10.7012 14.9901 9.60247 14.9901C8.50369 14.9901 7.61328 14.0997 7.61328 13.0009C7.61328 11.9021 8.50369 11.0117 9.60247 11.0117H9.60569C10.7034 11.0128 11.5917 11.9032 11.5917 13.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.595 13.001H18.381V14.9902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.3437 14.9902V13.001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0647 13.0006C3.0647 5.54976 5.54903 3.06543 12.9999 3.06543C20.4507 3.06543 22.9351 5.54976 22.9351 13.0006C22.9351 20.4515 20.4507 22.9358 12.9999 22.9358C5.54903 22.9358 3.0647 20.4515 3.0647 13.0006Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.security.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.security.value}</h1>
                                </div>}
                            {(ex.expenses?.videos?.name && ex.expenses?.videos?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.1514 9.67253C17.9895 8.21539 20.4561 6.80587 20.9228 7.31063C21.6942 8.1392 21.6276 16.0249 20.9228 16.7773C20.4942 17.244 18.0085 15.8344 16.1514 14.3868" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51416 12.0371C2.51416 6.84473 4.23892 5.11426 9.41511 5.11426C14.5904 5.11426 16.3151 6.84473 16.3151 12.0371C16.3151 17.2285 14.5904 18.96 9.41511 18.96C4.23892 18.96 2.51416 17.2285 2.51416 12.0371Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.videos.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.videos.value}</h1>
                                </div>}
                            {(ex.expenses?.papers?.name && ex.expenses?.papers?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5955 15.6963H8.37549" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.5955 11.9365H8.37549" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.131 8.17676H8.37598" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60986 12C3.60986 18.937 5.70786 21.25 12.0009 21.25C18.2949 21.25 20.3919 18.937 20.3919 12C20.3919 5.063 18.2949 2.75 12.0009 2.75C5.70786 2.75 3.60986 5.063 3.60986 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.papers.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.papers.value}</h1>
                                </div>}
                            {(ex.expenses?.shops?.name && ex.expenses?.shops?.value) &&
                                <div>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.52377 7C9.41427 5.74386 13.9724 5.45573 16 5.5C18.0276 5.54427 18.8831 6.2663 19.5 7.5C20.5 9.5 20.289 14.4881 18.5 16.0871C16.712 17.6861 9.33015 17.8381 6.87015 16.0871C4.27115 14.2361 5.629 9.192 5.544 5.743C5.595 3.813 3.5 3.5 3.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13 10.5H15.773" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26375 20.127C7.56375 20.127 7.80775 20.371 7.80775 20.671C7.80775 20.972 7.56375 21.216 7.26375 21.216C6.96275 21.216 6.71875 20.972 6.71875 20.671C6.71875 20.371 6.96275 20.127 7.26375 20.127Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5953 20.127C17.8963 20.127 18.1403 20.371 18.1403 20.671C18.1403 20.972 17.8963 21.216 17.5953 21.216C17.2953 21.216 17.0513 20.972 17.0513 20.671C17.0513 20.371 17.2953 20.127 17.5953 20.127Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3>{ex.expenses.shops.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.shops.value}</h1>
                                </div>}
                            {(ex.expenses?.travel?.name && ex.expenses?.travel?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1715)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81887 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1715">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <h3>{ex.expenses.travel.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.travel.value}</h1>
                                </div>}
                            {(ex.expenses?.service?.name && ex.expenses?.service?.value) &&
                                <div>
                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_203_1715)">
                                                <path d="M25.6667 15.7503V24.5003C25.6667 24.8097 25.5438 25.1065 25.325 25.3253C25.1062 25.5441 24.8094 25.667 24.5 25.667H23.3333C23.0239 25.667 22.7272 25.5441 22.5084 25.3253C22.2896 25.1065 22.1667 24.8097 22.1667 24.5003V23.3337H5.83333V24.5003C5.83333 24.8097 5.71042 25.1065 5.49162 25.3253C5.27283 25.5441 4.97609 25.667 4.66667 25.667H3.5C3.19058 25.667 2.89383 25.5441 2.67504 25.3253C2.45625 25.1065 2.33333 24.8097 2.33333 24.5003V15.7503L0.883167 15.3887C0.630879 15.3255 0.406943 15.1798 0.246931 14.9747C0.0869192 14.7697 6.83717e-06 14.5171 0 14.257L0 13.417C0 13.2623 0.0614582 13.1139 0.170854 13.0045C0.280251 12.8951 0.428624 12.8337 0.583333 12.8337H2.77083L5.26517 6.18133C5.43192 5.73647 5.7305 5.35311 6.12098 5.0825C6.51146 4.8119 6.97525 4.66693 7.45033 4.66699H20.5497C21.0248 4.66693 21.4885 4.8119 21.879 5.0825C22.2695 5.35311 22.5681 5.73647 22.7348 6.18133L25.2292 12.8337H27.4167C27.5714 12.8337 27.7197 12.8951 27.8291 13.0045C27.9385 13.1139 28 13.2623 28 13.417V14.257C28 14.5171 27.9131 14.7697 27.7531 14.9747C27.5931 15.1798 27.3691 15.3255 27.1168 15.3887L25.6667 15.7503ZM4.66667 17.5003V19.8337C4.66667 20.1431 4.78958 20.4398 5.00838 20.6586C5.22717 20.8774 5.52391 21.0003 5.83333 21.0003H9.61917C9.7199 21.0002 9.81887 20.9739 9.90645 20.9241C9.99403 20.8744 10.0672 20.8028 10.1189 20.7163C10.1706 20.6299 10.199 20.5315 10.2014 20.4308C10.2038 20.3301 10.18 20.2305 10.1325 20.1417C9.19333 18.38 7.371 17.5003 4.66667 17.5003ZM23.3333 17.5003C20.6302 17.5003 18.8078 18.3812 17.8663 20.1417C17.8187 20.2306 17.795 20.3303 17.7974 20.4311C17.7999 20.5319 17.8284 20.6303 17.8802 20.7168C17.932 20.8033 18.0054 20.8749 18.0931 20.9246C18.1809 20.9743 18.28 21.0004 18.3808 21.0003H22.1667C22.4761 21.0003 22.7728 20.8774 22.9916 20.6586C23.2104 20.4398 23.3333 20.1431 23.3333 19.8337V17.5003ZM7 7.00033L5.17883 12.465C5.12045 12.6403 5.10453 12.8269 5.13239 13.0096C5.16026 13.1922 5.2311 13.3657 5.33909 13.5156C5.44709 13.6655 5.58914 13.7876 5.75356 13.8719C5.91798 13.9562 6.10007 14.0002 6.28483 14.0003H21.7152C21.8999 14.0002 22.082 13.9562 22.2464 13.8719C22.4109 13.7876 22.5529 13.6655 22.6609 13.5156C22.7689 13.3657 22.8397 13.1922 22.8676 13.0096C22.8955 12.8269 22.8796 12.6403 22.8212 12.465L21 7.00033H7Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_203_1715">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3>{ex.expenses.service.name}</h3>
                                    </div>
                                    <h1>-${ex.expenses.service.value}</h1>
                                </div>}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardLeft;