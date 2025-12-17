import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для бесплатного замера.",
    });
    setFormData({ name: '', phone: '', description: '' });
  };

  const services = [
    { icon: 'Home', title: 'Навесы и козырьки', price: 'от 9 000 ₽/м²' },
    { icon: 'DoorOpen', title: 'Ворота и калитки', price: 'от 45 000 ₽' },
    { icon: 'Fence', title: 'Перила и ограждения', price: 'от 3 500 ₽/м.п.' },
    { icon: 'Shield', title: 'Решётки на окна', price: 'от 4 500 ₽/м²' },
    { icon: 'GitBranch', title: 'Металлокаркасы', price: 'от 25 000 ₽' },
    { icon: 'Sparkles', title: 'Холодная ковка', price: 'по запросу' },
    { icon: 'Flame', title: 'Мангалы, лавки', price: 'по запросу' },
    { icon: 'Wrench', title: 'Сварочные работы', price: 'от 1 500 ₽/час' },
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Прочность как принцип',
      description: 'Металл должен жить дольше, чем ваша ипотека. Мы делаем так, чтобы служило десятилетиями.',
    },
    {
      icon: 'Sparkles',
      title: 'Красота и ровные швы',
      description: 'У нас сварка — не «как получилось», а как будто будете показывать всем гостям.',
    },
    {
      icon: 'Gem',
      title: 'Холодная ковка',
      description: 'Не просто каркасы — мы делаем металл красивым.',
    },
    {
      icon: 'FileText',
      title: 'Прозрачная цена',
      description: 'Без «доплат», «выросло по месту» и «сварщик ушёл в запой». Всё чётко.',
    },
    {
      icon: 'CheckCircle',
      title: 'Полный цикл',
      description: 'Дизайн → производство → покраска → монтаж. Вы ничего не ищете — мы делаем всё.',
    },
  ];

  const process = [
    { step: '01', title: 'Заявка или звонок', description: 'Вы рассказываете, что нужно — мы не задаём 20 глупых вопросов.' },
    { step: '02', title: 'Бесплатный выезд и замер', description: 'Снимаем размеры, обсуждаем варианты, сразу называем цену.' },
    { step: '03', title: 'Эскиз и финальная стоимость', description: 'Делаем визуализацию или 3D-пример — вам понятно, что получите.' },
    { step: '04', title: 'Производство', description: 'Сварка, ковка, обработка, покраска — всё в одном цехе.' },
    { step: '05', title: 'Монтаж', description: 'Приезжаем, устанавливаем, убираем за собой. Красота.' },
  ];

  const portfolioItems = [
    { id: 1, title: 'Ворота с ковкой', category: 'Ворота', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/a6463f74-74d1-412c-8bb3-f64061ad26f1.jpg' },
    { id: 2, title: 'Металлический навес', category: 'Навесы', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/e60530c9-d4ec-4a9c-afe1-a03fd0db17ac.jpg' },
    { id: 3, title: 'Перила и ограждения', category: 'Перила', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/d267b2e6-0032-4de6-81b6-968acbd14d7e.jpg' },
    { id: 4, title: 'Лестница с ковкой', category: 'Каркасы', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/b3d7d613-e1a7-4bc2-88ba-0530e094b90c.jpg' },
    { id: 5, title: 'Металлическая беседка', category: 'Навесы', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/91763cf3-0d26-480b-94ee-1106ed141a12.jpg' },
    { id: 6, title: 'Мастерская Эребор', category: 'О нас', image: 'https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/1d47f698-4c29-44d6-8389-7e0e962d9c5a.jpg' },
  ];

  const reviews = [
    { name: 'Алексей М.', location: 'Центральный район', text: 'Сделали навес идеально, приехали в срок, смонтировали быстро. Рекомендую!', stars: 5 },
    { name: 'Ирина К.', location: 'Хостинский район', text: 'Перила получились очень красивыми, ровные швы, качественная покраска. Спасибо!', stars: 5 },
    { name: 'Георгий Т.', location: 'Адлерский район', text: 'Заказывал ворота с элементами ковки. Работа выполнена на высшем уровне!', stars: 5 },
  ];

  const scrollToForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background z-[1]"></div>
        <div className="absolute inset-0 opacity-20">
          <img src="https://cdn.poehali.dev/projects/6c1d63c6-9850-43fe-802b-d4ce47e1d66a/files/1d47f698-4c29-44d6-8389-7e0e962d9c5a.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Мастерская Металла<br />
              <span className="text-primary">«ЭРЕБОР»</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Создаём металл, который служит годами
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Навесы, ворота, перила, ковка и любые сварочные работы — надёжно, красиво и точно в срок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={scrollToForm}>
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Image" className="mr-2" size={20} />
                Наши работы
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              {[
                { icon: 'Ruler', text: 'Бесплатный замер' },
                { icon: 'Award', text: 'Гарантия 12 месяцев' },
                { icon: 'Factory', text: 'Собственное производство' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card/50 p-4 rounded-lg backdrop-blur-sm">
                  <Icon name={item.icon} className="text-primary" size={24} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Почему клиенты выбирают нас,<br />а не соседний гараж?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, i) => (
              <Card key={i} className="bg-background border-border hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Что мы делаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit mx-auto">
                    <Icon name={service.icon} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-primary font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={scrollToForm}>
              <Icon name="Phone" className="mr-2" size={20} />
              Узнать цены на услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Работаем по-человечески,<br />без сюрпризов
          </h2>
          <div className="max-w-4xl mx-auto mt-16 space-y-8">
            {process.map((item, i) => (
              <div key={i} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-6xl font-bold text-primary/20 min-w-[80px]">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Здесь будут реальные фотографии наших проектов: навесы, ворота, перила, элементы ковки и индивидуальные изделия
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item, i) => (
              <Card key={item.id} className="bg-card border-border overflow-hidden hover:border-primary transition-all group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              «Если смотрите и думаете: хочу так же — смело нажимайте кнопку ниже».
            </p>
            <Button size="lg" onClick={scrollToForm}>
              <Icon name="Calculator" className="mr-2" size={20} />
              Получить расчёт
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Эребор vs обычная бригада</h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-4 text-xl">Критерий</th>
                  <th className="text-center p-4 text-xl text-primary">ЭРЕБОР</th>
                  <th className="text-center p-4 text-xl text-muted-foreground">Обычный сварщик</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Гарантия', 'Гарантия 12 месяцев', '«Ну если чё — позвоните»'],
                  ['Цена', 'Прозрачная цена', '«По месту скажу»'],
                  ['Документация', 'Эскизы и 3D', '«И так понятно»'],
                  ['Качество', 'Ровные швы и красивая геометрия', '«Ну чуть криво, но норм»'],
                  ['Помещение', 'Собственный цех', 'Работает где придётся'],
                  ['Сроки', 'Соблюдаем', '«Завтра… ну через неделю… может»'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="p-4 font-semibold">{row[0]}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                        <span>{row[1]}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="XCircle" className="text-destructive" size={20} />
                        <span>{row[2]}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Примерные цены на популярные изделия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Навесы', price: 'от 9 000 ₽/м²', icon: 'Home' },
              { name: 'Ворота распашные', price: 'от 45 000 ₽', icon: 'DoorOpen' },
              { name: 'Перила металлические', price: 'от 3 500 ₽/м.п.', icon: 'Fence' },
              { name: 'Решётки на окна', price: 'от 4 500 ₽/м²', icon: 'Shield' },
              { name: 'Калитки', price: 'от 18 000 ₽', icon: 'DoorClosed' },
              { name: 'Каркасы лестниц', price: 'от 25 000 ₽', icon: 'GitBranch' },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary transition-all">
                <CardContent className="p-6">
                  <Icon name={item.icon} className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Цена зависит от конструкции и материалов — рассчитает мастер.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Кто мы такие</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мастерская Металла «Эребор» — это цех, созданный мастерами Тамазом и Гией.
              Мы соединяем мастерство ковки, аккуратность сварки и уважение к металлу.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Каждый проект делаем так, будто устанавливаем у себя дома.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              А Глеб отвечает за маркетинг, порядок и чтобы компания выглядела круто (ну а кто ещё?).
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.stars)].map((_, j) => (
                      <Icon key={j} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">«{review.text}»</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Рассчитать стоимость</h2>
            <p className="text-center text-muted-foreground mb-12">
              Заполните форму, и мы свяжемся с вами для бесплатного замера и точного расчёта
            </p>
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Описание проекта</label>
                    <Textarea
                      placeholder="Опишите, что вам нужно: навес, ворота, перила и т.д. Можете указать размеры или приблизительные пожелания"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={5}
                      className="bg-card"
                    />
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <Icon name="Info" className="mt-0.5 flex-shrink-0" size={16} />
                      <span>Если у вас есть фото или чертежи, вы сможете прикрепить их после отправки заявки при общении с мастером</span>
                    </p>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 metal-texture border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MessageCircle" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">WhatsApp / Telegram</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Адрес цеха</p>
                      <p className="text-muted-foreground">г. Сочи, ул. Производственная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold mb-1">График работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00<br />Сб: 9:00 - 15:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Map" className="text-muted-foreground mx-auto mb-4" size={64} />
                  <p className="text-muted-foreground">Карта будет здесь</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Работаем в Сочи и ближайших районах.<br />
                Выезд мастера — <span className="text-primary font-semibold">бесплатно</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-primary">ЭРЕБОР</span> — Мастерская Металла
          </h3>
          <p className="text-muted-foreground text-sm">
            Ворота | Навесы | Перила | Ковка | Сварка
          </p>
          <p className="text-muted-foreground text-xs mt-4">
            © 2024 Мастерская Металла «Эребор». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;