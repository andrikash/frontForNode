import translationTable from '../components/TableComponents/translation/index';
import translationModal from '../components/ModalWindow/translation/index';
import translationNavbar from '../components/Navbar/translation/index';
import translationAuth from '../Modules/Auth/translation/index';
import translationProducts from '../Modules/Products/translation/index';
import translationUser from '../Modules/User/translation/index';

export const concatTranslations = (...translations) => {
    const UK_LANGUAGE = 'uk';
    const UA_LANGUAGE = 'ua';

    let obj = {};
    translations.forEach((el) => {
        obj = {
            [UK_LANGUAGE]: {
                ...obj[UK_LANGUAGE],
                ...el[UK_LANGUAGE]
            },
            [UA_LANGUAGE]: {
                ...obj[UA_LANGUAGE],
                ...el[UA_LANGUAGE]
            }
        }
    })

    return obj;
}
export const translationObject = () => {
   const translationObject = concatTranslations(
    translationAuth,
    translationProducts,
    translationUser,
    translationNavbar,
    translationModal,
    translationTable,
    translationProducts,);
    
    return translationObject;
}