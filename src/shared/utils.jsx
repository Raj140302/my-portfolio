import { Bounce, toast } from "react-toastify"

// export const parseParams = (params = '') => {
//     const urlParams = new URLSearchParams(params)
//     const array = [
//         'size',
//         'search',
//         'pageNumber',
//         'aFilters',
//         'aStatusFiltersInput',
//         'aStatus',
//         'aCountryFilter',
//         'aRoleFilter',
//         'aCodeFilters',
//         'eDesignationFilter',
//         'aCategoryFilters',
//         'aTagFilters',
//         'aFilter',
//         'eState',
//         'aState',
//         'aTeamTagFilters',
//         'aVenueTagFilters',
//         'aSeriesFilters',
//         'aAuthorsFilters',
//         'aType',
//         'eGender',
//         'eType',
//         "eCategory",
//         "userType"
//     ]
//     const value = Object.fromEntries(urlParams.entries())
//     Object.keys(value).forEach((key) => {
//         if (array.includes(key)) {
//             value[key] = value[key].split(',')
//         }
//     })
//     return value
// }

// export const appendParams = (value) => {
//     const params = parseParams(location.search)
//     const data = { ...params, ...value }
//     Object.keys(data).filter((e) => (data[e] === '' || !data[e].toString().length) && delete data[e])
//     window.history.pushState({}, null, `${location.pathname}?${new URLSearchParams(data).toString()}`)
// }

export const ReactToastify = (msg, type, customId) => {
    switch (type) {
        case 'success':
            toast.success(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Bounce,
            })
            break;
        case 'error':
            toast.error(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Bounce,
                toastId: customId
            })
            break;
        default:
            break;
    }
}

export function formatMilliseconds(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    const formattedHours = hours > 0 ? `${hours}h ` : '';
    const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes}m ` : '';
    const formattedSeconds = remainingSeconds > 0 ? `${remainingSeconds}s` : '';

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`.trim();
}

export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function removeCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}