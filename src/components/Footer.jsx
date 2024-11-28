import React from "react";
import Logo from "../assets/logo_emblema.png"

function Footer() {
  return (
    <footer className="bg-[#1D1D1D] py-6 px-6 mt-8">
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <img src={Logo} alt="" />
          <br />
          <img className="w-36" src="https://s3-alpha-sig.figma.com/img/89a4/88b4/ea7862a51542025b9f3283253de56b0d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMiQ79ixQM-DJwMfLaTi1VyJey8Yk8Ng0NzL59GcFGvtqvyTNAoOkMSJd1JeGngmGTSt7PlkPRRcCMtn~jn~b7TKl70Kpq3s74EeLBKpVt1n6T54W8L-WTxpEpAwXkt65xZv1E1K4enKFsFLcHxAcoG4myXV2AmnXwnPwJ9UHb346PROArHOUyd~G3PmZ15sskXxs-TNI2kUGP6VRO0FfkhzCRL0-FZvQzJjumNWo-CIGXNE5IGfUEd8FQzHpKc~UgAQEaVo9aNGrkQoKFlYFmy9U~BBsjJj3QNHg-ccVheb57mUqX74b3DXAF3AK6mt-gB8bfI~4RZKMi9o53rwqg__" alt="" />
          {/* <img className="w-36" src="https://s3-alpha-sig.figma.com/img/69fb/6907/41e63d88902c65c7c22b68de5f9a49ea?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xvd-8stiJ7ljlTq5tc-N00MoSJqn-ii9aB4JGUjV32mkKwosVU1uqiLwKdcFcwtaELjSMCD9Z3N4kR2dOc4fEJHQWcnSKP722hifb3J4TCOcmHAiByOr4GOzT4dK7XDJ-gvZLulZxYSrKtEMOEBUlPy0hlZx~KbJYZzsLZ3eovCxueN3MPp7EbgQyEUZNpsNaGj9y1T6NnVKCoyohxOgjb8oYFFhD7wu1FF98wNhNhkc3DvM176np8v0Mroit5lHs6QGxzPAjnVoE6o5o7ClW2TMXVOKkXCb2uowEkdTnD6Stzxb~UPHUePQvOrp2OjnubNopdPLxsYfB5XTni-Pow__" alt="" /> */}
        </div>
        <div>
          <p className="font-bold">О нас</p>
          <p className="mt-4">Публичная оферта</p>
          <p className="mt-4">Реклама</p>
          <p className="mt-4">F.A.Q</p>
          <p className="mt-4">Контакты</p>
        </div>
        <div>
          <p className="font-bold">Категории</p>
          <p className="mt-4">Кино</p>
          <p className="mt-4">Театр</p>
          <p className="mt-4">Концерты</p>
        </div>
        <div>
          <p className="font-bold">Связаться с нами</p>
          <p className="mt-4">+998 (95) 897-33-38</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
