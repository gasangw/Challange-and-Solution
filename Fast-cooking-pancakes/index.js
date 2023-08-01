function cookPancakes(n, m) {
      if(n < m ){
        return 2
      } else {
         return Math.ceil((n/m)*2)
      }
    }