const data = {
  // first_screen
  direction: 'Дизайн',
  title: 'Цифровой дизайн',
  pic: {
    desktop: {
      webp: 'https://248006.selcdn.ru/LandGen/tablet_d8c553430df4d4ccd7605388ff25c293fc69ecbb.webp',
      img: 'https://248006.selcdn.ru/LandGen/tablet_d8c553430df4d4ccd7605388ff25c293fc69ecbb.png'
    },
    mobile: {
      webp: 'https://248006.selcdn.ru/LandGen/tablet_d8c553430df4d4ccd7605388ff25c293fc69ecbb.webp',
      img: 'https://248006.selcdn.ru/LandGen/tablet_d8c553430df4d4ccd7605388ff25c293fc69ecbb.png'
    }
  },
  programs_count: '36',

  // description
  description: {
    themes: '', // array || string
    desc: '' // array || string
  },

  // video
  videoData: {
    videoId: '',
    alt: '',
    preview: { // если превью не будет, то подставляется обложка с ютуба
      video: {
        webm: '',
        mp4: ''
      },
      picture: {
        webp: '',
        img: ''
      }
    }
  },

  // works
  works: [
    {
      direction: 'Цифровой дизайн',
      title: 'Проект для ProCharity: обложка книги для фонда «Белый Ирис»',
      desc: 'Сайт социальной сети «ВКонтакте»',
      pic: {
        img: '',
        webp: ''
      },
      previews: [
        {
          webp: '',
          img: ''
        }
      ],
      speaker: {
        name: 'Алина Гашинская',
        avatar: {
          webp: '',
          img: ''
        },
        desc: 'Студентка курса <a href="#">«Графический дизайн»</a>'
      }
    }
  ],

  // program
  program: {},

  // reviews
  reviews: [ // есть еще количество студентов и компаний
    {
      name: 'Богдан Пилипенко',
      avatar: {
        webp: '',
        img: ''
      },
      desc: 'Аккаунт-менеджер в&nbsp;Appollo Digital',
      review: '',
      background: '#f81d1d'
    }
  ],

  // students
  students: [
    {
      name: 'Дмитрий Щеглов',
      age: '33 года',
      images: {
        webp: '',
        img: ''
      },
      oldJob: 'Водитель',
      newJob: 'Программист',
      url: 'https://skillbox.ru/media/'
    }
  ],

  // teachers
  teachers_count: '59',
  teachers: [ // три преподавателя
    {
      firstname: 'Сергей',
      middlename: 'Попков',
      picture: {
        webp: 'https://248006.selcdn.ru/MainSite/teachers/teacher/1.webp',
        img: 'https://248006.selcdn.ru/MainSite/teachers/teacher/1.jpg'
      },
      job: 'Ex продуктовый дизайнер Яндекса, продуктовый дизайнер в Manychat',
      description: `<p>2020 год я&nbsp;начала с&nbsp;новой жизни: уволилась с&nbsp;позиции руководителя Training and
        Development в&nbsp;IT-компании и&nbsp;уехала в&nbsp;солнечный Тель-Авив за&nbsp;новой жизнью.</p>
        <p>Однако уже через несколько месяцев учебы поняла как сильно мне не&nbsp;хватает работы в
        горячо любимой сфере обучения. Хорошо, что практически сразу я&nbsp;нашла вакансию проверяющего
        куратора в&nbsp;Skillbox.</p>
        <p>Начав с&nbsp;работы на&nbsp;одном курсе, я&nbsp;начала расти, курировать чаты и&nbsp;расширять количество
        проверяемых курсов&nbsp;&mdash; это позволило мне зарабатывать больше.</p>
        <p>Работа в&nbsp;Skillbox для меня&nbsp;&mdash; это возможность планировать свое время, работать из&nbsp;любой
        точки мира, постоянно учиться, развиваться и&nbsp;быть уверенной в&nbsp;завтрашнем дне.</p>`
    },
    {},
    {}
  ],

  // faculties
  faculties: [
    {
      title: 'Дизайн среды',
      pic: {
        mobile: {
          webp: '',
          img: ''
        }
      },
      tags: 'Интерьер, ландшафт, декорирование',
      slug: '#'
    }
  ],

  // questions
  questions: [
    {
      question: '',
      answer: ''
    }
  ]
}
