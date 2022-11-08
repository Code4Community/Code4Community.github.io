---
layout: page
title: A+ Arts Academy 
permalink: /A+
content_style: github_markdown
---


[Presentation](https://docs.google.com/presentation/d/18zgf1zw2Vxfub0V8PpbH3V2freMi6SbY9exvRGb4008/edit?usp=sharing)

[Buckeye Catcher](https://c4cosu.com/buckeye-catch-em/)

#### Helpful Functions

| Function | Description |
|-----------|-----------|
| moveleft |  Moves the basket one spot to the left. |
| moveright | Moves the basket one spot to the right. |
| stay | Tells the basket to stay still for a second. |

#### How to Loop
* Forever Loop:
    * if you want to repeat an action forever, place it in a forever...end loop
    * For example: 
```
        forever
            moveleft
            moveright
        end
```

* X Times Loop:
    * if you want to repeat an action a certain number of times, place it in a X times...loop
        * X is the number of times you want the action to repeat
    * For example: 
```
        3 times
            moveleft
            moveleft
            moveright
        end
```