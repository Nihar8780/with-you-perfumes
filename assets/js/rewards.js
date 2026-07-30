/*==========================================================
  WITH YOU - Luxury Perfume Store
  REWARDS JS
  Version: 1.0
==========================================================*/

"use strict";

/*=========================================
  STORAGE KEY
=========================================*/

const REWARD_KEY = "withyou-rewards";

/*=========================================
  DEFAULT DATA
=========================================*/

let rewards = JSON.parse(

    localStorage.getItem(REWARD_KEY)

) || {

    points: 0,

    totalSpent: 0,

    referrals: 0,

    level: "Bronze"

};

/*=========================================
  SAVE
=========================================*/

function saveRewards(){

    localStorage.setItem(

        REWARD_KEY,

        JSON.stringify(rewards)

    );

    updateRewardUI();

}

/*=========================================
  EARN POINTS
=========================================*/

function earnPoints(amount){

    const earned = Math.floor(amount / 100);

    rewards.points += earned;

    rewards.totalSpent += amount;

    updateLevel();

    saveRewards();

}

/*=========================================
  REDEEM POINTS
=========================================*/

function redeemPoints(points){

    if(points > rewards.points){

        alert("Not enough reward points.");

        return false;

    }

    rewards.points -= points;

    saveRewards();

    return true;

}

/*=========================================
  REFERRAL BONUS
=========================================*/

function addReferral(){

    rewards.referrals++;

    rewards.points += 200;

    updateLevel();

    saveRewards();

}

/*=========================================
  MEMBERSHIP LEVEL
=========================================*/

function updateLevel(){

    if(rewards.totalSpent >= 100000){

        rewards.level = "Platinum";

    }

    else if(rewards.totalSpent >= 50000){

        rewards.level = "Gold";

    }

    else if(rewards.totalSpent >= 20000){

        rewards.level = "Silver";

    }

    else{

        rewards.level = "Bronze";

    }

}

/*=========================================
  DISCOUNT CALCULATION
=========================================*/

function rewardDiscount(){

    return rewards.points * 0.5;

}

/*=========================================
  UPDATE UI
=========================================*/

function updateRewardUI(){

    const points=document.getElementById("rewardPoints");

    const level=document.getElementById("rewardLevel");

    const spent=document.getElementById("totalSpent");

    if(points){

        points.textContent = rewards.points;

    }

    if(level){

        level.textContent = rewards.level;

    }

    if(spent){

        spent.textContent =

            "₹" + rewards.totalSpent.toLocaleString("en-IN");

    }

}

/*=========================================
  RESET
=========================================*/

function resetRewards(){

    rewards = {

        points:0,

        totalSpent:0,

        referrals:0,

        level:"Bronze"

    };

    saveRewards();

}

/*=========================================
  INITIALIZE
=========================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        updateRewardUI();

    }

);

/*=========================================
  EXPORT
=========================================*/

window.earnPoints = earnPoints;

window.redeemPoints = redeemPoints;

window.rewardDiscount = rewardDiscount;

window.resetRewards = resetRewards;

window.addReferral = addReferral;
