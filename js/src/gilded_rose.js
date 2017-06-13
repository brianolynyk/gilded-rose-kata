function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];


function update_quality() {
  /**
   * STEP 2: Create constants for repeated strings that
   * line up with business language for ease of keeping
   * in your head.
   */

  /**
   * General thoughts on how to improve this gnarly mess
   * below.
   * 
   * Each business rule could be it's own function or set 
   * of functions. One function for each property.  Each
   * item would then run though the existing lists of function
   * which would have their own criteria and would be applied
   * accordingly.
   * 
   * Get rid of the mutation.  Rather than constantly mutating
   * the items, let's use functional programming and immutable
   * date to make things clearer.
   * 
   * Stylistically, semicolons should be everywhere.
   * triple equals should be used everywhere.
   * 
   * Lastly, depending on the amount of rules a system like
   * this would realistically have, perhaps investing in a 
   * dedicated rules engine like Drools (https://www.drools.org/)
   * would makes sense.
   */
  const BRIE = 'Aged Brie';
  const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
  const LEGENDARY_ITEM = 'Sulfuras, Hand of Ragnaros';
  const CONJURED_ITEM = 'conjured';

  for (var i = 0; i < items.length; i++) {
    if (items[i].name != BRIE && items[i].name != BACKSTAGE_PASSES) {
      if (items[i].quality > 0) {
        if (items[i].name != LEGENDARY_ITEM) {
          /**
           * STEP 4a: Add new feature.  Ideally this should be DRY.
           * But abstraction by clipboard was used as can be seen
           * below.
           */
          if (items[i].name.toLowerCase().indexOf(CONJURED_ITEM) > -1) {
            items[i].quality = items[i].quality - 2  
          } else {
            items[i].quality = items[i].quality - 1
          }
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == BACKSTAGE_PASSES) {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != LEGENDARY_ITEM) {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != BRIE) {
        if (items[i].name != BACKSTAGE_PASSES) {
          if (items[i].quality > 0) {
            if (items[i].name != LEGENDARY_ITEM) {
              /**
               * Step 4b: TODO: DRY this up.
               */
              if (items[i].name.toLowerCase().indexOf(CONJURED_ITEM) > -1) {
                items[i].quality = items[i].quality - 2;
              } else {
                items[i].quality = items[i].quality - 1;
              }
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
