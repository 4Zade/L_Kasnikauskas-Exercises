import Card from './assets/components/Card';

export interface User {
  firstName: string;
  lastName: string;
  about: string;
  avatarUrl: string;
  skills: SkillProp[];
  available: boolean;
}

export interface SkillProp {
  name: string;
  color: string;
  icon: string;
}

const users: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis venenatis erat sed tincidunt. Duis vestibulum neque at augue finibus, ac lacinia purus elementum.',
    avatarUrl: 'https://assets-global.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg',
    skills: [
      {name: 'HTML', color: 'orange', icon: 'brand-html5'},
      {name: 'CSS', color: 'blue', icon: 'brand-css3'},
      {name: 'JavaScript', color: 'yellow', icon: 'brand-javascript'},
      {name: 'Angular', color: 'red', icon: 'brand-angular'},
    ],
    available: false,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis venenatis erat sed tincidunt. Duis vestibulum neque at augue finibus, ac lacinia purus elementum.',
    avatarUrl: 'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/3.JPG-nggid03125-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG',
    skills: [
      {name: 'HTML', color: 'orange', icon: 'brand-html5'},
      {name: 'CSS', color: 'blue', icon: 'brand-css3'},
      {name: 'JavaScript', color: 'yellow', icon: 'brand-javascript'},
      {name: 'React', color: 'cyan', icon: 'brand-react'},
      {name: 'Svelte', color: 'orange', icon: 'brand-svelte'},
      {name: 'TypeScript', color: 'purple', icon: 'brand-typescript'},
    ],
    available: true,
  },
  {
    firstName: 'Jake',
    lastName: 'Dame',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis venenatis erat sed tincidunt. Duis vestibulum neque at augue finibus, ac lacinia purus elementum.',
    avatarUrl: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg',
    skills: [
      {name: 'HTML', color: 'orange', icon: 'brand-html5'},
      {name: 'CSS', color: 'blue', icon: 'brand-css3'},
      {name: 'JavaScript', color: 'yellow', icon: 'brand-javascript'},
      {name: 'Vue', color: 'emerald', icon: 'brand-vue'},
      {name: 'Svelte', color: 'orange', icon: 'brand-svelte'},
      {name: 'TypeScript', color: 'purple', icon: 'brand-typescript'},
    ],
    available: true,
  }
]

function App() {
  return (
    <>
      <div className='w-full h-full flex justify-evenly items-center'>
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default App
