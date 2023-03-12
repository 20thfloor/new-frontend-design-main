/* eslint-disable quotes */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'Search Officer Here': 'Search Officer Here',
      'Search for Officers': 'Search for Officers',
      'Profile Picture': 'Profile Picture',
      'Officer Name': 'Officer Name',
      'Badge Number': 'Badge Number',
      Action: 'Action',
      'Select Officer': 'Select Officer',
      'Enter Your Info': 'Enter Your Info',
      'Fill Survey Form': 'Fill Survey Form',
      'Enter First Name': 'Enter First Name',
      'Enter Last Name': 'Enter Last Name',
      'Enter Address': 'Enter Address',
      'Enter Phone Number': 'Enter Phone Number',
      'Enter City': 'Enter City',
      'Enter Zip Code': 'Enter Zip Code',
      Next: 'Next',
      'First Name': 'First Name',
      'Last Name': 'Last Name',
      'Phone Number': 'Phone Number',
      State: 'State',
      City: 'City',
      'Zip Code': 'Zip Code',
      'All steps completed': 'All steps completed',
      'ThankYou text and tick': 'ThankYou text and tick',
      'Thank You for Submitting the Survey': 'Thank You for Submitting the Survey',
      'Rate the Officer': 'Rate the Officer',
      'Any Comments': ' Any Comments',
      Comments: 'Comments',
      Previous: 'Previous',
      Submit: 'Submit',
      'Select Choice': 'Select Choice',
      'Multiple Choice': 'Multiple Choice',
      'Comment Here': 'Comment Here',
      Select: 'Select'
    }
  },
  fr: {
    translation: {
      'Search Officer Here': 'Agent de recherche ici',
      'Search for Officers': 'Rechercher des officiers',
      'Profile Picture': 'Image de profil',
      'Officer Name': "Nom de l'officier",
      'Badge Number': 'Numéro de badge',
      Action: 'action',
      'Select Officer': 'Sélectionner un officier',
      'Enter Your Info': 'Entrez vos informations',
      'Fill Survey Form': "Remplissez le formulaire d'enquête",
      'Enter First Name': 'Entrez votre prénom',
      'Enter Last Name': 'Entrer le nom de famille',
      'Enter Address': "Entrer l'adresse",
      'Enter Phone Number': 'Entrez le numéro de téléphone',
      'Enter City': 'Entrez la ville',
      State: 'Etat',
      'Enter Zip Code': 'Entrer le code postal',
      Next: 'Prochain',
      'First Name': 'Prénom',
      'Last Name': 'Nom de famille',
      'Zip Code': 'Código postal',
      Address: 'Adresse',
      'Phone Number': 'Numéro de téléphone',
      City: 'Ville',
      'All steps completed': 'Toutes les étapes terminées',
      'ThankYou text and tick': 'Merci texte et cochez',
      'Thank You for Submitting the Survey': "Merci d'avoir soumis le sondage",
      'Rate the Officer': "Évaluer l'officier",
      'Any Comments': 'Tout commentaire',
      Comments: 'commentaires',
      Previous: 'Précédent',
      Submit: 'Soumettre',
      'Select Choice': 'Choisissez votre choix',
      'Multiple Choice': 'Choix multiple',
      'Comment Here': 'Commentez ici',
      Select: 'Sélectionner'
    }
  },
  es: {
    translation: {
      'Search Officer Here': 'Oficial de búsqueda aquí',
      'Search for Officers': 'Búsqueda de oficiales',
      'Profile Picture': 'Foto de perfil',
      'Badge Number': 'Numero de placa',
      'Officer Name': 'Nombre del oficial',
      Action: 'Acción',
      'Select Officer': 'Seleccionar oficial',
      'Enter Your Info': 'Ingrese su información',
      'Fill Survey Form': 'Rellenar formulario de encuesta',
      'Enter First Name': 'Ingrese el nombre',
      'Enter Last Name': 'Introduzca el apellido',
      'Enter Address': 'Ingresa la direccion',
      'Enter Phone Number': 'Ingresa número telefónico',
      'Enter City': 'Ingrese Ciudad',
      State: 'Estado',
      'Enter Zip Code': 'Ingresa tu código postal',
      Next: 'Próximo',
      'First Name': 'Primer nombre',
      'Last Name': 'Apellido',
      Address: 'Habla a',
      'Phone Number': 'Número de teléfono',
      City: 'Ciudad',
      'Zip Code': 'Código postal',
      'All steps completed': 'Todos los pasos completados',
      'ThankYou text and tick': 'Gracias texto y marca',
      'Thank You for Submitting the Survey': 'Gracias por enviar la encuesta',
      'Rate the Officer': 'Calificar al oficial',
      'Any Comments': 'Algún comentario',
      Comments: 'Comentarios',
      Previous: 'Previo',
      Submit: 'Enviar',
      'Select Choice': 'Seleccionar elección',
      'Multiple Choice': 'Opción multiple',
      'Comment Here': 'Comenta aquí',
      Select: 'Seleccione'
    }
  },
  ar: {
    translation: {
      'Search Officer Here': 'ابحث عن ضابط هنا',
      'Search for Officers': 'ابحث عن الضباط',
      'Profile Picture': 'الصوره الشخصيه',
      'Badge Number': 'رقم الشارة',
      'Officer Name': 'اسم الضابط',
      Action: 'عمل',
      'Select Officer': 'حدد ضابط',
      'Enter Your Info': 'أدخل معلوماتك',
      'Fill Survey Form': 'تعبئة استمارة الاستبيان',
      'Enter First Name': 'أدخل الاسم الأول',
      'Enter Last Name': 'إدخال اسم آخر',
      'Enter Address': 'أدخل العنوان',
      'Enter Phone Number': 'أدخل رقم الهاتف',
      'Enter City': 'أدخل المدينة',
      State: 'حالة',
      'Enter Zip Code': 'أدخل الرمز البريدي',
      Next: 'التالى',
      'First Name': 'الاسم الأول',
      'Last Name': 'اسم آخر',
      Address: ' العنوان',
      'Phone Number': ' رقم الهاتف',
      City: ' المدينة',
      'Zip Code': 'الرمز البريدي',
      'All steps completed': 'اكتملت جميع الخطوات',
      'ThankYou text and tick': 'شكرا لك النص ووضع علامة',
      'Thank You for Submitting the Survey': 'شكرا لك على تقديم الاستبيان',
      'Rate the Officer': 'قيم الضابط',
      'Any Comments': 'أي تعليقات',
      Comments: 'تعليقات',
      Previous: 'السابق',
      Submit: 'إرسال',
      'Select Choice': 'حدد اختيار',
      'Multiple Choice': 'متعدد الخيارات',
      'Comment Here': 'التعليق هنا',
      Select: 'تحديد'
    }
  },
  ko: {
    translation: {
      'Search Officer Here': '여기에서 경찰 검색',
      'Search for Officers': '임원 검색',
      'Profile Picture': '프로필 사진',
      'Badge Number': ' 배지 번호',
      'Officer Name': '임원 이름',
      Action: '동작',
      'Select Officer': '임원 선택',
      'Enter Your Info': '정보 입력',
      'Fill Survey Form': '설문 조사 양식 작성',
      'Enter First Name': '이름 입력',
      'Enter Last Name': '성 입력',
      'Enter Address': '주소 입력',
      'Enter Phone Number': '전화 번호 입력',
      'Enter City': '도시 입력',
      State: '상태',
      'Enter Zip Code': '우편 번호를 입력하세요',
      Next: '다음',
      'First Name': '이름',
      'Last Name': '성',
      Address: '주소',
      'Phone Number': '전화 번호',
      City: '시티',
      'Zip Code': '우편 번호',
      'All steps completed': '모든 단계 완료',
      'ThankYou text and tick': '감사합니다 텍스트 및 틱',
      'Thank You for Submitting the Survey': '설문 조사를 제출해 주셔서 감사합니다',
      'Rate the Officer': '임원 평가',
      'Any Comments': '다른하실 말씀 있나요',
      Comments: '코멘트',
      Previous: '이전',
      Submit: '제출',
      'Select Choice': '선택 선택',
      'Multiple Choice': '다중 선택',
      'Comment Here': '여기에 댓글 달기',
      Select: '고르다'
    }
  },
  'zh-CN': {
    translation: {
      'Search Officer Here': '搜索官在这里',
      'Search for Officers': '搜寻人员',
      'Profile Picture': '个人资料图片',
      'Officer Name': '个人资料图片',
      'Badge Number': '证件号码',
      Action: '行动',
      'Select Officer': '特选干事',
      'Enter Your Info': '输入您的信息',
      'Fill Survey Form': '填写调查表',
      'Enter First Name': '输入名字',
      'Enter Last Name': '输入姓氏',
      'Enter Address': '输入地址',
      'Enter Phone Number': '输入电话号码',
      'Enter City': '输入城市',
      State: '州',
      'Enter Zip Code': '输入邮政编号',
      Next: '下一个',
      'First Name': '名字',
      'Last Name': '姓',
      'Phone Number': '电话号码',
      City: '市',
      'Zip Code': '邮政编码',
      'All steps completed': '所有步骤完成',
      'ThankYou text and tick': '谢谢你发短信并打勾',
      'Thank You for Submitting the Survey': '感谢您提交调查',
      'Rate the Officer': '评价官员',
      'Any Comments': '任何意见',
      Comments: '评论',
      Previous: '以前',
      Submit: '提交',
      'Select Choice': '选择选择',
      'Multiple Choice': '多项选择',
      'Comment Here': '在这里评论',
      Select: '选择'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n