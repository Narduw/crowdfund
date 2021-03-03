import Reward from './rewards/Reward'

// TODO: get this data from elsewhere
const rewardsData = [
    {
        name: 'Bamboo Stand',
        minPrice: 25,
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
        remaining: 101
    },
    {
        name: 'Black Edition Stand',
        minPrice: 75,
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.`,
        remaining: 64
    },
    {
        name: 'Mahogany Special Edition',
        minPrice: 200,
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.`,
        remaining: 0
    }
]

const rewardComponents = rewardsData.map((rewardItem, key) => {
    const props = {
        key,
        ...rewardItem
    }
    return <Reward { ...props }/>
});

function Rewards() {
    return <section className="project-rewards">
        <h2 className="title">About this project</h2>
        <p className="description">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p className="description">
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens', and USB sticks to be stored under the stand.
        </p>
        {rewardComponents}
    </section>
}

export default Rewards
