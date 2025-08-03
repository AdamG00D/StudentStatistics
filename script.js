document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // تنشيط القسم الأول عند تحميل الصفحة
    document.querySelector('.nav-btn.active').classList.add('active');
    document.querySelector('.section').classList.add('active');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // إزالة النشاط من جميع الأزرار والأقسام
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // إضافة النشاط للزر المحدد والقسم المقابل
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            // إضافة تأثير سلس للتمرير
            document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // إضافة تأثيرات للبطاقات عند التمرير
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // مراقبة بطاقات أفضل 3 طلاب
    const topCards = document.querySelectorAll('.top-card');
    topCards.forEach(card => {
        observer.observe(card);
    });
    
    // إضافة تأثيرات للجدول عند التمرير
    const tableRows = document.querySelectorAll('.participants-table tr');
    tableRows.forEach((row, index) => {
        // تخطي الصف الأول (رأس الجدول)
        if (index > 0) {
            observer.observe(row);
        }
    });
});