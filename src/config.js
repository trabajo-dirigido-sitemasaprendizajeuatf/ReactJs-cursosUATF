// Url Api-rest cursos (backend)

const HostApi='http://localhost'


const config={
    UrlApi:'http://localhost:3005/courses/api/v1.0/',
    Url:'http://localhost:3005/courses/api/v1.0/signup',
    urlLognin:'http://localhost:3005/courses/api/v1.0/signin',
    urlUsers:'http://localhost:3005/courses/api/v1.0/users',
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

                 //  http://localhost:3005/avarage/rating/start 
    UrlRatingStar:`http://localhost:3005/avarage/rating/start`,

        // material de apoyo (examen, mat doc. y url) 
    UrlExamenVideo: `http://localhost:3005/take/exam/student`,
    
        // registro de los examenes y las vistas de los video
    UlrCourseTakeExam: `http://localhost:3005/courses/takes/exam`,

        // controla los examenes que ya fueron tomados por un usuario de un video
    UrlTakeExamControl: `http://localhost:3005/courses/examen/resolved`
}

export default config

