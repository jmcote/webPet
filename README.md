# Web Pet
This small script allows a user to interact with a pet that they can create through the browser console. This pet can be either a dog or a cat, and can be interacted with through the browser console as well. A user can create as many pets as they like in parallel.

# Create a Pet
``var petName = new Pet("Pet Name","dog"/"cat");``

Where petName is how you will be referring to the specific pet. Then give the pet a name in the first arguement, and say whether it is either a dog or a cat in the second. As many pets can be created as can be imagined, so long as their petName is different.

# Interact With Your Pet
Replace every petName with whatever you used for petName in the creation of your pet.

``petName.feed();``
Feeds the pet and restores it's hunger to full.

``petName.speak();``
Command your pet to speak.

``petName.nap();``
Command your pet to nap, making it no longer tired. Must be followed by wakeUp.

``petName.wakeUp();``
Wakes your pet up, leaving them hungry but rested.

``petName.rollOver();``
Command your pet to roll over. (Warning: Cats will only do so when they feel like it.)

``petName.fetch();``
Play fetch with your pet.

``petName.shake();``
Command your pet to shake your hand.

# Statistics
You can see how many times your pet has done, or tried to do, all of the things you've asked of it.

```myPet.stats.rolls
myPet.stats.rollAttempts (for cats only)
myPet.stats.fetches
myPet.stats.shakes
myPet.stats.orations
myPet.stats.meals
myPet.stats.naps
```
