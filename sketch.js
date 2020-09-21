
    var wall, thickness;
    var bullet,speed, weight;

function setup() {
	

    createCanvas(1600, 400);

    speed=random(55,70)
    weight=random(30,52)


    thickness=random(22,83)
    bullet=createSprite(50, 200, 55,20);  
    bullet.velocityX = speed;
	bullet.shapeColor=(rgb(209, 195, 2));
    wall=createSprite(1200, 200, thickness, height/2);       
    wall.shapeColor=color(230,230,230);
 
}


function draw() {
    background(0);  

    if(hasCollided(bullet, wall))
    {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>6)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<6)
	{
		wall.shapeColor=color(0,255,0);
	}
	
    }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


