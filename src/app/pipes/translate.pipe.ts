import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: string): string {
    const translations: { [key: string]: { [key: string]: string } } = {
      en: {
        // Home Section
        'Home': 'Home',
        'Welcome to My Portfolio': 'Welcome to My Portfolio',
        "Backend Developer | API Specialist | Multilingual Tech Enthusiast": "Backend Developer | API Specialist | Multilingual Tech Enthusiast",
        'I am a web developer passionate about creating incredible digital experiences.': 'I am a web developer passionate about creating incredible digital experiences.',
        "\"Building solid foundations for scalable digital solutions.\"": "Building solid foundations for scalable digital solutions.",
        'View my projects': 'View my projects',
        // About Section
        'About': 'About',
        'About Me': 'About Me',
        'I am a backend developer with a strong specialization in Node.js, database management with SQL, and API development (both REST and SOAP). I have extensive experience working with Linux servers, Git, Docker, and Angular, and I am proficient in using Ionic for mobile development. While my focus is on robust and scalable backend solutions, I also value seamless integrations and efficient workflows.': 'I am a backend developer with a strong specialization in Node.js, database management with SQL, and API development (both REST and SOAP). I have extensive experience working with Linux servers, Git, Docker, and Angular, and I am proficient in using Ionic for mobile development. While my focus is on robust and scalable backend solutions, I also value seamless integrations and efficient workflows.',
        'I have completed a course on artificial intelligence and deep learning with Python on Udemy, and during high school, I took a course on Angular. Although I didn\'t learn much back then, it sparked my interest in web development.': 'I have completed a course on artificial intelligence and deep learning with Python on Udemy, and during high school, I took a course on Angular. Although I didn\'t learn much back then, it sparked my interest in web development.',
        'My most ambitious project is to develop a bot builder for automated responses on social media platforms. In my free time, I enjoy learning about new technologies and exploring Japanese culture, as I am interested in studying in Japan. One of my future goals is to create my own AI to manage customer interactions for chatbots.': 'My most ambitious project is to develop a bot builder for automated responses on social media platforms. In my free time, I enjoy learning about new technologies and exploring Japanese culture, as I am interested in studying in Japan. One of my future goals is to create my own AI to manage customer interactions for chatbots.',
        'I am also multilingual, fluent in Spanish, English, and Japanese, which allows me to collaborate effectively in diverse and global teams.': 'I am also multilingual, fluent in Spanish, English, and Japanese, which allows me to collaborate effectively in diverse and global teams.',
        'Connect with me on LinkedIn': 'Connect with me on LinkedIn',
        // Projects Section
        'Projects': 'Projects',
        "Bot Builder": "Bot Builder",
        "A flowchart-based bot building interface with nodes connecting one-to-one.": "A flowchart-based bot building interface with nodes connecting one-to-one.",
        "WhatsApp Conversation Management": "WhatsApp Conversation Management",
        "Manage and interact with WhatsApp conversations effectively.": "Manage and interact with WhatsApp conversations effectively.",
        "RPG Game with Python and Twitch Integration": "RPG Game with Python and Twitch Integration",
        "A 2D RPG game developed in Python using Pygame with Twitch integration.": "A 2D RPG game developed in Python using Pygame with Twitch integration.",
        // Skills Section
        'Skills': 'Skills',
        'My Skills':'My Skills',
        "Technical Skills": "Technical Skills",
        "Database Skills": "Database Skills",
        "Soft Skills": "Soft Skills",
        // Section Contact
        'Contact': 'Contact',
        'Send Message': 'Send Message',
        'Name':'Name',
        'Email':'Email',
        'Message':'Message',
        // Footer
        'All rights reserved': 'All rights reserved',
        // Others
        'Change to light theme': 'Change to light theme',
        'Change to dark theme': 'Change to dark theme',
      },
      es: {
        // Home Section
        'Home': 'Inicio',
        'Welcome to My Portfolio': 'Bienvenido a Mi Portafolio',
        "Backend Developer | API Specialist | Multilingual Tech Enthusiast": "Desarrollador Backend | Especialista en APIs | Entusiasta de la Tecnología Multilingüe",
        'I am a web developer passionate about creating incredible digital experiences.': 'Soy un desarrollador web apasionado por crear experiencias digitales increíbles.',
        "\"Building solid foundations for scalable digital solutions.\"": "Construyendo bases sólidas para soluciones digitales escalables.",
        'View my projects': 'Ver mis proyectos',
        // About Section
        'About': 'Sobre mí',
        'About Me': 'Sobre mí',
        'I am a backend developer with a strong specialization in Node.js, database management with SQL, and API development (both REST and SOAP). I have extensive experience working with Linux servers, Git, Docker, and Angular, and I am proficient in using Ionic for mobile development. While my focus is on robust and scalable backend solutions, I also value seamless integrations and efficient workflows.': 'Soy un desarrollador backend con una fuerte especialización en Node.js, gestión de bases de datos con SQL, y desarrollo de APIs (tanto REST como SOAP). Tengo amplia experiencia trabajando con servidores Linux, Git, Docker, y Angular, y soy competente en el uso de Ionic para desarrollo móvil. Aunque mi enfoque está en soluciones backend robustas y escalables, también valoro las integraciones fluidas y los flujos de trabajo eficientes.',
        'I have completed a course on artificial intelligence and deep learning with Python on Udemy, and during high school, I took a course on Angular. Although I didn\'t learn much back then, it sparked my interest in web development.': 'He completado un curso sobre inteligencia artificial y deep learning con Python en Udemy, y durante la preparatoria, tomé un curso de Angular. Aunque no aprendí mucho en ese entonces, despertó mi interés por el desarrollo web.',
        'My most ambitious project is to develop a bot builder for automated responses on social media platforms. In my free time, I enjoy learning about new technologies and exploring Japanese culture, as I am interested in studying in Japan. One of my future goals is to create my own AI to manage customer interactions for chatbots.': 'Mi proyecto más ambicioso es desarrollar un constructor de bots para respuestas automáticas en plataformas de redes sociales. En mi tiempo libre, disfruto aprender sobre nuevas tecnologías y explorar la cultura japonesa, ya que estoy interesado en estudiar en Japón. Uno de mis objetivos futuros es crear mi propia IA para gestionar interacciones con clientes en chatbots.',
        'I am also multilingual, fluent in Spanish, English, and Japanese, which allows me to collaborate effectively in diverse and global teams.': 'También soy multilingüe, fluido en español, inglés y japonés, lo que me permite colaborar eficazmente en equipos diversos y globales.',
        'Connect with me on LinkedIn': 'Conéctate conmigo en LinkedIn',
        // Projects Section
        'Projects': 'Proyectos',
        "Bot Builder": "Constructor de Bots",
        "A flowchart-based bot building interface with nodes connecting one-to-one.": "Una interfaz de construcción de bots basada en flujogramas con nodos conectados uno a uno.",
        "WhatsApp Conversation Management": "Gestión de Conversaciones de WhatsApp",
        "Manage and interact with WhatsApp conversations effectively.": "Gestiona e interactúa con conversaciones de WhatsApp de manera efectiva.",
        "RPG Game with Python and Twitch Integration": "Juego RPG con Python e Integración con Twitch",
        "A 2D RPG game developed in Python using Pygame with Twitch integration.": "Un juego RPG en 2D desarrollado en Python utilizando Pygame con integración con Twitch.",  
        // Skills Section
        'Skills': 'Habilidades',
        'My Skills':'Mis Habilidades',
        "Technical Skills": "Habilidades Técnicas",
        "Database Skills": "Habilidades en Bases de Datos",
        "Soft Skills": "Habilidades Blandas",
        // Contact Section
        'Contact': 'Contacto',
        'Send Message': 'Enviar Mensaje',
        'Name':'Nombre',
        'Email':'Correo electrónico',
        'Message':'Mensaje',
        // Footer
        'All rights reserved': 'Todos los derechos reservados',
        // Otros
        'Change to light theme': 'Cambiar a tema claro',
        'Change to dark theme': 'Cambiar a tema oscuro',
      },
      ja: {
        // Home Section
        'Home': 'ホーム',
        'Welcome to My Portfolio': 'ポートフォリオへようこそ',
        "Backend Developer | API Specialist | Multilingual Tech Enthusiast": "バックエンド開発者 | APIスペシャリスト | 多言語技術愛好家",
        'I am a web developer passionate about creating incredible digital experiences.': '私は素晴らしいデジタル体験の創造に情熱を注ぐウェブ開発者です。',
        "\"Building solid foundations for scalable digital solutions.\"": "スケーラブルなデジタルソリューションのための堅実な基盤を構築します。",
        'View my projects': 'プロジェクトを見る',
        // About Section
        'About': '私について',
        "About Me": "私について",
        "I am a backend developer with a strong specialization in Node.js, database management with SQL, and API development (both REST and SOAP). I have extensive experience working with Linux servers, Git, Docker, and Angular, and I am proficient in using Ionic for mobile development. While my focus is on robust and scalable backend solutions, I also value seamless integrations and efficient workflows.": "私はNode.js、SQLによるデータベース管理、およびAPI開発（RESTおよびSOAPの両方）に強みを持つバックエンド開発者です。Linuxサーバー、Git、Docker、Angularでの豊富な経験があり、モバイル開発にはIonicを熟練して使用できます。私の焦点は堅牢でスケーラブルなバックエンドソリューションにありますが、シームレスな統合と効率的なワークフローも重視しています。",
        "I have completed a course on artificial intelligence and deep learning with Python on Udemy, and during high school, I took a course on Angular. Although I didn't learn much back then, it sparked my interest in web development.": "私はUdemyでPythonによる人工知能とディープラーニングのコースを修了し、高校時代にはAngularのコースを受講しました。当時はあまり学びませんでしたが、それがウェブ開発への興味を引き起こしました。",
        "My most ambitious project is to develop a bot builder for automated responses on social media platforms. In my free time, I enjoy learning about new technologies and exploring Japanese culture, as I am interested in studying in Japan. One of my future goals is to create my own AI to manage customer interactions for chatbots.": "私の最も野心的なプロジェクトは、ソーシャルメディアプラットフォームでの自動応答のためのボットビルダーを開発することです。自由な時間には、新しい技術を学んだり、日本の文化を探求したりすることを楽しんでいます。将来的な目標の一つは、チャットボットの顧客対応を管理するための自分のAIを作成することです。",
        "I am also multilingual, fluent in Spanish, English, and Japanese, which allows me to collaborate effectively in diverse and global teams.": "また、私はスペイン語、英語、日本語に堪能であり、多様でグローバルなチームで効果的に協力することができます。",
        "Connect with me on LinkedIn": "LinkedInで私とつながりましょう",
        // Projects Section
        'Projects': 'プロジェクト',
        "Bot Builder": "ボットビルダー",
        "A flowchart-based bot building interface with nodes connecting one-to-one.": "ノードが1対1で接続されるフローチャートベースのボット構築インターフェース。",
        "WhatsApp Conversation Management": "WhatsApp会話管理",
        "Manage and interact with WhatsApp conversations effectively.": "WhatsAppの会話を効果的に管理および対話します。",
        "RPG Game with Python and Twitch Integration": "PythonとTwitch統合によるRPGゲーム",
        "A 2D RPG game developed in Python using Pygame with Twitch integration.": "Pythonで開発された2D RPGゲームで、Pygameを使用し、Twitchと統合されています。",  
        // Skills Section
        'Skills': 'スキル',
        'My Skills':'私のスキル',
        "Technical Skills": "技術スキル",
        "Database Skills": "データベーススキル",
        "Soft Skills": "ソフトスキル",
        // Contact Section
        'Contact': '連絡先',
        'Send Message': 'メッセージを送信',
        'Name':'名前',
        'Email':'メール',
        'Message':'メッセージ',
        // Footer
        'All rights reserved': '全著作権所有',
        // Otros
        'Change to light theme': 'ライトテーマに変更',
        'Change to dark theme': 'ダークテーマに変更',
      }
    };

    const currentLang = this.languageService.getCurrentLanguage();
    return translations[currentLang][value] || value;
  }
}