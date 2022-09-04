// ===================== Typing Animation ===================== // 

var typed = new Typed('.typing',{
    strings:['Web Developer' , 'Software Engineer' , 'Problem Solver'],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

// ===================== Typing Animation ===================== // 
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      allSections = document.querySelectorAll('.section'),
      totalSectionsLength=allSections.length,
      totalNavLength = navList.length;
for (let i = 0 ; i < totalNavLength ; i++)
{
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function() {
        removeBackSection()
        
        for (let j = 0 ; j<totalNavLength;j++)
        {
            if(navList[j].querySelector('a').classList.contains('active'))
            {
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if(window.innerWidth<1200)
        {
            asideSectionTogglerBtn();
        }  
    })
}
function addBackSection(num)
{
    allSections[num].classList.add('back-section');
}
function removeBackSection()
{
    for(let i=0;i<totalNavLength;i++)
    {
        allSections[i].classList.remove('back-section');
    }
}
function showSection(element)
{
    for (let i = 0 ; i< totalSectionsLength ; i++)
    {
        allSections[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}
function updateNav(element)
{
    for(let i = 0 ; i< totalNavLength;i++)
    {
        navList[i].querySelector('a').classList.remove('active');
        const target2 = element.getAttribute('href').split('#')[1];
        if(target2 === navList[i].querySelector('a').getAttribute('href').split('#')[1])
        {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector('.hire-me').addEventListener('click' , function()
{
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const asideTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');
        
asideTogglerBtn.addEventListener('click', ()=>{
    asideSectionTogglerBtn();
    console.log('clicked');
        })

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    asideTogglerBtn.classList.toggle('open');
    for(let i = 0 ; i < totalSectionsLength ; i++)
    {
        allSections[i].classList.toggle('open');
    }
}