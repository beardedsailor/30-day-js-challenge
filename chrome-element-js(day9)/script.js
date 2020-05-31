    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('#p1');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Hello, How are you?");

    // Interpolated
    console.log("Yo Yo Honey %s" ,"Singh");
    // Styled
    console.log("%c I am so great ","font-size:100px,font-weight:bolder");


    // warning!
    console.warn('Thoda Dhyan se');
    // Error :|
    console.error('Pageya Panga');
    // Info
    console.info('Jankari Tuhade lyi');
    // Testing
    console.log('value of this '+100*20);
    // clearing
    console.clear();


   
    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    /*console.time('fetching data');
    fetch('');
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);

   
*/
