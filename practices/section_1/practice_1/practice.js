function collect_same_elements(collection_a, collection_b) {

  var newArray=[];
  for(var i=0;i<collection_a.length;i++) {

    var item = collection_a[i];
    if (isexit(item,collection_b))
    {
      newArray.push(item);
    }

  }
  return newArray;
}

function isexit(element,collection)
{
  for (var j = 0; j < collection.length; j++)
  {
    if(collection[j]===element) {
      return true
    }
  }
  return false;
}

module.exports = collect_same_elements;
