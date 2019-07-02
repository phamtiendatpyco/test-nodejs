## Environment:
- NodeJs v8.10.0
- Npm 5.6.0
- Jest 23.4.1

## How to build and test it
- Use npm to run project: 
```
npm run start
```
- To test run:
```
npm test
```
- To generate test coverage run:
```
npm run coverage
```
After run the command above, find test coverage in **project directory > coverage > Icov-report > index.html**
## Complexity analysis
### Test 1:
- storeData: We have 2 loops
  - The first one loop through a list of map (consider n as the number of map elements).
  - The second one loop through key-value of the map (consider m as the number of key-value in map).
  - So we have the complexity time for this method is O(n*m).
  
- loadData: We also have 2 loops
  - The first one loops through the text for each map (consider n as the number of text map elements).
  - The second one loop through the key-value text of each map (consider m as the number of key-value elements in map).
  - And we also have the complexity time for this method is O(n*m).
