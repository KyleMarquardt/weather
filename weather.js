$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "It is " + data.currently.summary + " and " + data.currently.apparentTemperature +
    " degrees today. " + "For the next three days, we'll see highs of " + data.daily.data[1].apparentTemperatureMax +
    ", " + data.daily.data[2].apparentTemperatureMax + ", and " + data.daily.data[3].apparentTemperatureMax + " degrees, respecitvely. "

    var markup = "It is "
    //data will probably be what you call for
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
