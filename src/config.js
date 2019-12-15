// Url Api-rest cursos (backend)

const HostApi='http://localhost'


const config={
    UrlApi:'http://localhost:3005/courses/api/v1.0/',
    Url:'http://localhost:3005/courses/api/v1.0/signup',
    urlLognin:'http://localhost:3005/courses/api/v1.0/signin',
    urlUsers:'http://localhost:3005/courses/api/v1.0/users',
    UrlListUserId: `http://localhost:3005/user/id=`,
    urlPrivate:'http://localhost:3005/courses/api/v1.0/private',
    UrlCreateCourse:'http://localhost:3005/courses/api/v1.0/crearcurso',
    UrlListartodoslosCursos:'http://localhost:3005/courses/api/v1.0/listarcursos',
    UrlMostarCursoPorId:'http://localhost:3005/courses/api/v1.0/mostrarcursoforid',
    UrlMostarSeccionUnCurso:'http://localhost:3005/courses/api/v1.0/listarsecciones/idcourse=',
    Urladdnewseccion:'http://localhost:3005/courses/api/v1.0/seccion',
    UrlUploadVideo:'http://localhost:3005/uploadvideo/idSeccion=',
    UrlaCuestionarioRepaso:'http://localhost:3005/cuestionariorepaso',
    // http://localhost:3005/Upload/file/Materia/Apoyo/idVideo=5d20d5a71b6a092c1408243c/filename=este es el nombre del file
    UrlUploadMaterialSupport:`http://localhost:3005/Upload/file/Materia/Apoyo`,
    UrlUploadLinks:`http://localhost:3005/Upload/links`,

    // Reating star
                 //  http://localhost:3005/avarage/rating/start 
    UrlRatingStar:`http://localhost:3005/avarage/rating/start`,
                //  recibe idUser idVideo voto --> voto de estrellas de un curso.
    UrlVotarRatingStart:'http://localhost:3005/rating/star',
    UrlViewReatingStarUser :`http://localhost:3005/reating/star/user`,      //muestra el voto de un usuario de un curos 

        // material de apoyo (examen, mat doc. y url) 
    UrlExamenVideo: `http://localhost:3005/take/exam/student`,
    
        // registro de los examenes y las vistas de los video
    UlrCourseTakeExam: `http://localhost:3005/courses/takes/exam`,

        // controla los examenes que ya fueron tomados por un usuario de un video
    UrlTakeExamControl: `http://localhost:3005/courses/examen/resolved`,

        //MATERIAL DE APOYO
        //->/Show/file/Materia/Apoyo/idVideo=:idVideo
    UrlFileMaterilaApoyo:`http://localhost:3005/Show/file/Materia/Apoyo/idVideo=`,
        //-> /Show/materialapoyo/links/idVideo=:idVideo
    UrlLinksMaterialApoyo:`http://localhost:3005/Show/materialapoyo/links/idVideo=`,

        //AGREGAR A MIS CURSOS
    UlrAgregarCursoMisCurso:`http://localhost:3005/add/course/student`,


        // Mis cursos - student
    UrlShowMisCoursesStudent:`http://localhost:3005/show/my/courses/student`,
            //-- muestra la clase de una seccion (title video render notas)
    UrlShowDataVide:`http://localhost:3005/show/data/video/class`,


    //------link Server SOCKET.IO ------
    URLSERVERSOCKET : `http://localhost:3005/`,
    URLshowChatForum:`http://localhost:3005/show/chat/forum/video`,

    //----muestra las calificaiones de estdiante por cursos
    URLshowNotasPorCursos: `http://localhost:3005/view/exam/student/course`,

    // muestra todas las notas de los estudinates de uno o varios cursos dictados por un teacher
    UrlShowNotaStudentsForCourse: `http://localhost:3005/show/notas/students/course`,
    UrlShowDataStundent:`http://localhost:3005/show/data/stundent/for/course`,
    UrlShowNotaStudent :`http://localhost:3005/show/notas/student`,
    
    
    // ::::::::::::::::::::ADMIN:::::::::::::::::
    UrlShowAllStudents: `http://localhost:3005/admin/show/students`,
    UrlShowAllTeachers: `http://localhost:3005/admin/show/teachers`,
    UrlUpdateRoleUser: `http://localhost:3005/admin/update/role/user`,
    UrlShowAssistants:  `http://localhost:3005/admin/show/all/asistants`,
    UrlUploadStudentMongoDB :'http://localhost:3005/upload' , 
    UrlBackup:'http://localhost:3005/backup',
    
    // reportes (descargar excel) admin
    UrlDownloadFileStudents:`http://localhost:3005/admin/show/students/report`,
    UrlDownloadFileTeacherts: `http://localhost:3005/admin/show/teachers/report`,
    UrlDownloadFileAssistants: `http://localhost:3005/admin/show/assistant/report`,
    // reportes de las notas de los cursos pertenecientes a un docente
    UrlDownloadFileNotasTeacher: `http://localhost:3005/teacher/reports/notas`,

    //::::EEDIT DATA USER::::::::
    UrlUploadProfileUser: `http://localhost:3005/edit/my/account/user/idUser=`,  //recibe una imagen(foto de perfil) y un idUser
    UrlShowImageAvatar:`http://localhost:3005/Show/image/avatar/idUser=` ,       // revueve el link de la imagene del avara
    UlrShowDataUser: `http://localhost:3005/edit/show/users/data/iduser=`,   // URI get que recibe un idUde para mostrar los datos de usuario
    UrlEditDataUser :  `http://localhost:3005/edit/my/account/user/data`,  // URI  que recibe los datos la confuracio de los datos
    
    // security email ci y password clave Matricula
    UrlUpdateEmailCI : `http://localhost:3005/security/update/email/ci/user`,   //  URI que recibe el idUser, new email.
    UrlUpdatPasswordClveM: `http://localhost:3005/security/update/password/clavem`  // URI qie recibe en idUser, password, newPasswordClaveM de un usuario
    
}


export default config

