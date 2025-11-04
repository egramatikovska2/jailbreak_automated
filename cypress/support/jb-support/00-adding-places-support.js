//17 unique US locations
const locations = [
  { street: '2288 Deborah St', city: 'Delta Junction', state: 'Alaska', zip: '99737' },
  { street: '200 W Washington St', city: 'Phoenix', state: 'Arizona', zip: '85003' },
  { street: '200 N Spring St', city: 'Los Angeles', state: 'California', zip: '90012' },
  { street: '1437 Bannock St', city: 'Denver', state: 'Colorado', zip: '80202' },
  { street: '3500 Pan American Dr', city: 'Miami', state: 'Florida', zip: '33133' },
  { street: '55 Trinity Ave SW', city: 'Atlanta', state: 'Georgia', zip: '30303' },
  { street: '121 N LaSalle St', city: 'Chicago', state: 'Illinois', zip: '60602' },
  { street: '200 E Washington St', city: 'Indianapolis', state: 'Indiana', zip: '46204' },
  { street: '527 W Jefferson St', city: 'Louisville', state: 'Kentucky', zip: '40202' },
  { street: '2 Woodward Ave', city: 'Detroit', state: 'Michigan', zip: '48226' },
  { street: '414 E 12th St', city: 'Kansas City', state: 'Missouri', zip: '64106' },
  { street: '495 S Main St', city: 'Las Vegas', state: 'Nevada', zip: '89101' },
  { street: '1 Civic Plaza NW', city: 'Albuquerque', state: 'New Mexico', zip: '87102' },
  { street: '600 E Trade St', city: 'Charlotte', state: 'North Carolina', zip: '28202' },
  { street: '90 W Broad St', city: 'Columbus', state: 'Ohio', zip: '43215' },
  { street: '301 W 2nd St', city: 'Austin', state: 'Texas', zip: '78701' },
  { street: '600 4th Ave', city: 'Seattle', state: 'Washington', zip: '98104' }
];

//Helper function to get random location(s)
function getRandomLocation(n = 1) {
  const shuffled = [...locations].sort(() => 0.5 - Math.random());
  return n === 1 ? shuffled[0] : shuffled.slice(0, n);
}

//Setting the format when an address is returned
function address_generator() {
  const { street, city, state, zip } = getRandomLocation();
  return `${street}, ${city}, ${state} ${zip}, USA`;
}

//Return n random addresses as strings
function address_generator_n(n = 1) {
  return getRandomLocation(n).map(loc => {
    const { street, city, state, zip } = loc;
    return `${street}, ${city}, ${state} ${zip}, USA`;
  });
}

module.exports = { 
  address_generator,
  address_generator_n,
  getRandomLocation
};
