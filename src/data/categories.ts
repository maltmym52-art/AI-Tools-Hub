import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'writing',
    name: 'أدوات الكتابة بالذكاء الاصطناعي',
    iconName: 'PenTool',
    description: 'توليد المحتوى، كتابة المقالات، صياغة رسائل البريد، والتدقيق اللغوي.',
    color: 'violet'
  },
  {
    id: 'image',
    name: 'أدوات إنشاء الصور',
    iconName: 'Image',
    description: 'تحويل النص إلى صور، تعديل الصور، الرسم الرقمي، والتصميم الفني.',
    color: 'cyan'
  },
  {
    id: 'video',
    name: 'أدوات إنشاء الفيديو',
    iconName: 'Video',
    description: 'تحويل النص إلى فيديو، تعديل المقاطع، وتوليد الرسوم المتحركة والسينمائية.',
    color: 'rose'
  },
  {
    id: 'audio',
    name: 'أدوات الصوت والموسيقى',
    iconName: 'Music',
    description: 'توليد الموسيقى، تحويل النص إلى كلام، تعديل الصوت، وإزالة التشويش.',
    color: 'amber'
  },
  {
    id: 'coding',
    name: 'أدوات البرمجة',
    iconName: 'Code2',
    description: 'توليد الأكواد البرمجية، شرح الشفرات، اكتشاف الأخطاء، وإكمال الكود التلقائي.',
    color: 'emerald'
  },
  {
    id: 'marketing',
    name: 'أدوات التسويق',
    iconName: 'TrendingUp',
    description: 'تحليل البيانات، جدولة المنشورات، تحسين محركات البحث SEO، وتوليد الإعلانات.',
    color: 'blue'
  },
  {
    id: 'education',
    name: 'أدوات الدراسة والتعليم',
    iconName: 'GraduationCap',
    description: 'تلخيص الكتب والمقالات، المساعدة في البحوث، وتوليد خرائط المفاهيم والخرائط الذهنية.',
    color: 'indigo'
  },
  {
    id: 'productivity',
    name: 'أدوات الإنتاجية',
    iconName: 'Sparkles',
    description: 'تنظيم الملاحظات، أتمتة المهام اليومية، تنظيم المواعيد، وتسهيل سير العمل الجماعي.',
    color: 'orange'
  }
];
