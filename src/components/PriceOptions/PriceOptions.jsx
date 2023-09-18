import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    // Price options data 
    const priceOptions = [
        {
        "id": 1,
        "name": "Basic Membership",
        "features": [
            "Access to cardio and weightlifting areas",
            "Locker room access",
            "Group fitness classes",
            "1 complimentary personal training session",
            "Open 7 days a week"
        ],
        "price": 30
        },
        {
        "id": 2,
        "name": "Premium Membership",
        "features": [
            "All Basic Membership features",
            "Unlimited group fitness classes",
            "Access to sauna and spa",
            "Nutritional consultation",
            "Priority access to fitness equipment",
            "24/7 gym access"
        ],
        "price": 50
        },
        {
        "id": 3,
        "name": "Family Membership",
        "features": [
            "Access for two adults and two children",
            "All Premium Membership features",
            "Childcare services",
            "Family-oriented fitness classes",
            "Discounted rates on additional personal training sessions"
        ],
        "price": 90
        },
        {
        "id": 4,
        "name": "Student Membership",
        "features": [
            "Access to cardio and weightlifting areas",
            "Locker room access",
            "Group fitness classes",
            "Valid student ID required",
            "Open 7 days a week"
        ],
        "price": 100
        }
    ];
      
    return (
        <div className="mx-auto">
            <h2 className="text-5xl p-4">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    // Loop through each price option 
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;